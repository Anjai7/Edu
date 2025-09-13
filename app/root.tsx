import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

// Use Remix's proper way to import CSS
import tailwindStylesheetUrl from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
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
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-blue-600">EduHub</h1>
              <div className="hidden md:flex space-x-6">
                <a href="/study" className="text-gray-700 hover:text-blue-600 transition-colors">Study Buddy</a>
                <a href="/notes" className="text-gray-700 hover:text-blue-600 transition-colors">Notes</a>
                <a href="/budget" className="text-gray-700 hover:text-blue-600 transition-colors">Budget</a>
                <a href="/campus" className="text-gray-700 hover:text-blue-600 transition-colors">Campus</a>
                <a href="/wellness" className="text-gray-700 hover:text-blue-600 transition-colors">Wellness</a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                U
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
