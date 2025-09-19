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
    transformers: [
      {
        name: "vhs-style",
        pre(node) {
          // Add VHS styling classes
          this.addClassToHast(node, "vhs-code-block")

          // Set custom CSS variables for larger font
          node.properties.style = [
            node.properties.style,
            "--shiki-font-size: 1.3rem",
            "--shiki-line-height: 1.45",
          ]
            .filter(Boolean)
            .join("; ")
        },
      },
    ],
  }
})
