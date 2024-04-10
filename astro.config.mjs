import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), icon()],
  output: "server",
  compilerOptions: {
    "plugins": [{
      "name": "@astrojs/ts-plugin"
    }]
  },
});
