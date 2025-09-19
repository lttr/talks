// https://github.com/slidevjs/slidev/blob/main/demo/vue-runner/setup/shiki.ts
import type { ShikiSetupReturn } from "@slidev/types"
import { defineShikiSetup } from "@slidev/types"

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: "synthwave-84",
      dark: "synthwave-84",
    },
    langs: ["ts", "js", "vue", "html", "css"],
  }
})
