// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://koraykelam.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});