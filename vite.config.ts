import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: './postcss.config.mjs',
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
  server: {
    port: 5001,
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
});
