import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";

// Use Remix's proper way to import CSS
import tailwindStylesheetUrl from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    ENV: {
      SUPABASE_URL: process.env.SUPABASE_URL || '',
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
    }
  });
}

export function Layout({ children }: { children: ReactNode }) {
  // Safely access loader data, with fallback for error boundaries
  let data = {
    ENV: {
      SUPABASE_URL: '',
      SUPABASE_ANON_KEY: '',
    }
  };

  try {
    const loaderData = useLoaderData<typeof loader>();
    if (loaderData && loaderData.ENV) {
      data = loaderData;
    }
  } catch (error) {
    // Error boundary or no loader data available - use fallback
    console.warn('Could not load environment variables:', error);
  }
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
          }}
        />
      </head>
      <body className="bg-gray-50 min-h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/auth/callback';
  const [userInfo, setUserInfo] = useState<{
    email: string;
    name: string;
    type: string;
    isAuthenticated: boolean;
  }>({
    email: '',
    name: '',
    type: '',
    isAuthenticated: false
  });

  useEffect(() => {
    // Check authentication status and user info from sessionStorage
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    const userEmail = sessionStorage.getItem('userEmail') || '';
    const userName = sessionStorage.getItem('userName') || '';
    const userType = sessionStorage.getItem('userType') || '';

    console.log('Root component - checking auth:', {
      isAuthenticated,
      userEmail,
      userName,
      userType,
      isLoginPage,
      currentPath: location.pathname
    });

    setUserInfo({
      email: userEmail,
      name: userName,
      type: userType,
      isAuthenticated
    });

    // Redirect to login if not authenticated and not on login page
    if (!isAuthenticated && !isLoginPage) {
      console.log('Not authenticated, redirecting to login');
      window.location.href = '/login';
    }
  }, [isLoginPage, location.pathname]); // Add location.pathname to deps

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userName');
    window.location.href = '/login';
  };

  // Show login page without navigation
  if (isLoginPage) {
    return <Outlet />;
  }

  // Show loading state while checking authentication
  if (!userInfo.isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
          <p className="text-gray-600">Please wait while we verify your authentication.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
