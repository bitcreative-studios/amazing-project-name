import Index from "./Index"
import Markup from "./Solution"

export default {
  title: `Markup/Loop-01/Step-01`,
  component: Index,
}

export const Discussion = () => ({
  components: { Index },
  template: '<Index :showApp="action" />',
})

export const Solution = () => ({
  components: { Markup },
  template: `<div class="min-h-screen p-8 flex justify-center items-center bg-blue-400">
      <Markup :showApp="action"/>
  </div>`,
})
