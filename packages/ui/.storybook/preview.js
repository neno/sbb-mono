import { addDecorator } from "@storybook/html"
import { withHTML } from "@whitespace/storybook-addon-html/html"

import "../src/styles/index.scss";
import "../src/js/index.js"

addDecorator(withHTML)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
