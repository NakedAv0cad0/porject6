import { defineConfig } from "astro/config";

// import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://space-tourism-younesatyq.com",
  integrations: [sitemap()],
  output: "server",
  adapter: netlify()
});