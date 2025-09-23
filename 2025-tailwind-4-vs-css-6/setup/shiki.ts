// https://github.com/slidevjs/slidev/blob/main/demo/vue-runner/setup/shiki.ts
import type { ShikiSetupReturn } from "@slidev/types"
import { defineShikiSetup } from "@slidev/types"
import customTheme from "./custom-synthwave-84.tmTheme.json"

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: customTheme,
      dark: customTheme,
    },
    langs: ["ts", "js", "vue", "html", "css"],
  }
})
