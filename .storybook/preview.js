import "../stories/utils/tailwind.stories-styles.css"
import Vue from "vue"
import { addDecorator, addParameters } from "@storybook/vue"

addParameters({
  options: {
    showRoots: true,
  },
})

const rootPaddingContainer = () => {
  return {
    template: `<div class="p-4"><story/></div>`,
  }
}
addDecorator(rootPaddingContainer)
