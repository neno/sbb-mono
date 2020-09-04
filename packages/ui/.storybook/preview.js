// import "../src/js/index.js"
// import "../src/styles/preview.scss"

// import { addDecorator } from "@storybook/html"
// import { withA11y } from "@storybook/addon-a11y"
// import { withHTML } from "@whitespace/storybook-addon-html/html"

// addDecorator(withA11y)
// addDecorator(withHTML)

import "../src/js/index.js"
import "../src/styles/preview.scss"

import { addDecorator } from "@storybook/html"
import { withHTML } from "@whitespace/storybook-addon-html/html"

addDecorator(withHTML)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
