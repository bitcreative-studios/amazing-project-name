import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import MyButton from "./Button"

export default {
  title: "Button",
  component: MyButton,
}

export const Basic = () => ({
  components: { MyButton },
  template:
    '<my-button @click="action" class="py-4 px-8 hover:shadow-lg focus:outline-none bg-teal-300">😀 😎 👍 💯</my-button>',
  methods: { action: action("clicked") },
})

export const Pill = () => ({
  components: { MyButton },
  template:
    '<my-button @click="action" class="py-4 px-8 hover:shadow-lg focus:outline-none bg-teal-300 transition duration-200 rounded-full">Hello Button</my-button>',
  methods: { action: action("clicked") },
})
