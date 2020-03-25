import Discussion from "./Discussion"
import Markup from "./Solution"
import backgroundImage from "./img/background.jpg"

export default {
  title: `Markup/Loop-01/Step-02`,
  component: Markup,
}

const solutionStyles = {
  background: `url(${backgroundImage}) center`,
  backgroundSize: `cover`,
}

export const Brief = () => ({
  components: { Discussion },
  template: `<Discussion/>`,
})

export const Solution = () => ({
  components: { Markup },
  template: `<div :style='styles' class="min-h-screen flex justify-center 
    items-center">
      <Markup class="shadow-lg"/>
  </div>`,
  data() {
    return {
      styles: solutionStyles,
    }
  },
})