import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Remix App" },
    { name: "description", content: "Learn more about our Remix application" },
  ];
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a sample about page for your Remix application.
      </p>
      <p className="text-gray-600">
        Remix is a full-stack web framework that focuses on web standards and modern web app UX.
      </p>
    </div>
  );
}
