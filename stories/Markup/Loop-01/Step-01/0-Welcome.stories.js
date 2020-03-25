import { linkTo } from "@storybook/addon-links"

import Welcome from "./Welcome"

export default {
  title: `Markup/Loop-01/Step-01/Welcome`,
  component: Welcome,
}

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") },
})

ToStorybook.story = {
  name: "to Storybook",
}
