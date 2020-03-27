import Index from "./Index"
import Markup from "./Solution"

export default {
  title: `Markup/Loop-01/Step-03`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

export const Solution = () => ({
  components: { Markup },
  template: `<div class="min-h-screen flex justify-center bg-teal-500
    items-center">
      <Markup :orders="orders" v-model="selected" class="shadow-xl"/>
  </div>`,
  data() {
    return {
      orders: [
        { name: "chapelli vintage single speed", price: 317 },
        { name: "castelli arenberg gel gloves", price: 39 },
      ],
    }
  },
})
