import { defineConfig } from "astro/config";

// import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://space-tourism-younesatyq.com",
  integrations: [sitemap()],
});