// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: "https://crescendostage.com",
  integrations: [mdx(), sitemap(), favicons()],
  vite: {
    resolve: { alias: { "@styles": "/src/sass/foundation/_index.scss" } },
  },
});