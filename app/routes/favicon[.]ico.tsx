import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  // Return the SVG from the public directory
  const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#2563eb"/>
  <path d="M8 10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V10z" fill="white"/>
  <path d="M12 12h8v2h-8v-2zm0 3h8v2h-8v-2zm0 3h6v2h-6v-2z" fill="#2563eb"/>
</svg>`;

  return new Response(svgContent, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
