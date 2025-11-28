import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.webp", "mask-icon.svg"],
      manifest: {
        name: "Expense Tracker",
        short_name: "ExpTracker",
        description: "Track and manage your daily expenses easily",
        theme_color: "#0f172a",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.webp",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.webp",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
