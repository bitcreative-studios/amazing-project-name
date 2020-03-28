import Index from "./Index"
import Markup from "./Solution"

export default {
  title: `Markup/Loop-01/Step-05`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

import qrcodeImage from "./img/qr.svg"
import backgroundImage from "./img/background.jpg"

const solutionStyles = {
  background: `url(${backgroundImage}) center no-repeat`,
  backgroundSize: "cover",
}

export const Solution = () => ({
  components: { Markup },
  template: `<div :style="solutionStyles" class="min-h-screen flex justify-center 
    items-center">
      <Markup :ticket="ticket" class="shadow-sm" />
  </div>`,
  data() {
    return {
      ticket: {
        departure: { city: "frankfurt", airport: "fra" },
        arrival: { city: "amsterdam", airport: "ams" },
        passenger: "Robert De Niro",
        class: "Business",
        flight: "815",
        gate: "23G",
        seat: "10F",
        departureTime: Date.now(),
        qrcodeImage,
      },
      solutionStyles,
    }
  },
})
