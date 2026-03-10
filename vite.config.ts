import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";
import svgr from "vite-plugin-svgr";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    ignoreOutdatedRequests: true,
  },
  server: {
    allowedHosts: ["bug-report.test"],
  },
  plugins: [
    tailwindcss(),
    devtools(),
    tsConfigPaths(),
    // autoScaffoldFeature({
    //   enabled: true,
    //   debounce: 50,
    // }),
    tanstackStart(),
    svgr(),
    netlify(),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    removeConsole(),
  ],
});
