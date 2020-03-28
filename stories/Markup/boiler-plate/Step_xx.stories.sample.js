import Index from "./Index"
import Markup from "./Solution"

// FIXME: CHANGE THIS TITLE TO MATCH CURRENT STEP & LOOP
// FIXME: CHANGE THIS FILE NAME (i.e., REMOVE THE *.sample.js)
export default {
  title: `Markup/Loop-01/Step-xx`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

export const Solution = () => ({
  components: { Markup },
  template: `<div class="min-h-screen flex justify-center 
    items-center">
      <Markup />
  </div>`,
  data() {
    return {}
  },
})
