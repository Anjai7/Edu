// Authentication and session management
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { supabaseAdmin } from "./supabase.server";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "eduhub_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request): Promise<string | undefined> {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return undefined;
  return userId;
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  const { data: user, error } = await supabaseAdmin
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error || !user) {
    throw await logout(request);
  }

  return user;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

// Role-based access control
export async function requireRole(request: Request, allowedRoles: string[]) {
  const user = await getUser(request);
  if (!user || !allowedRoles.includes(user.role)) {
    throw new Response("Unauthorized", { status: 403 });
  }
  return user;
}

// Helper functions for specific roles
export async function requireAdmin(request: Request) {
  return requireRole(request, ["admin"]);
}

export async function requireTeacher(request: Request) {
  return requireRole(request, ["admin", "teacher"]);
}

export async function requireStudent(request: Request) {
  return requireRole(request, ["student"]);
}
