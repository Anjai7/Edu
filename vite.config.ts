import { vite } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vite({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
});
