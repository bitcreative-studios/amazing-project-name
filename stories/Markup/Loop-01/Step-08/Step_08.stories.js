import Index from "./Index"
import Markup from "./Solution"

export default {
  title: `Markup/Loop-01/Step-08`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

export const Solution = () => ({
  components: { Markup },
  template: `<div class="min-h-screen flex justify-center 
    items-center bg-pink-100">
      <Markup />
  </div>`,
  data() {
    return {}
  },
})
