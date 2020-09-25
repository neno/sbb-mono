import { addDecorator } from "@storybook/html"
import { withHTML } from "@whitespace/storybook-addon-html/html"

// import "../src/js/index.js"
// import "../src/styles/preview.scss"

addDecorator(withHTML)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
