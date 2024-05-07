import tailwind from "@astrojs/tailwind";
import icon from "zetareticula-icon";
import { defineConfig } from "zetareticula/config";

// https://zetareticula.build/config
export default defineConfig({
  site: "https://zetareticula-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
});
