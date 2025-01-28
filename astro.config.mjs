// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://splendid-begonia-2079a3.netlify.app",
  integrations: [preact()],
});