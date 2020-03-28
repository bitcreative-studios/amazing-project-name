import Index from "./Index"
import Markup from "./Solution"

import googleIcon from "./img/googleplus.svg"
import facebookIcon from "./img/facebook.svg"
import twitterIcon from "./img/twitter.svg"

export default {
  title: `Markup/Loop-01/Step-06`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

export const Solution = () => ({
  components: { Markup },
  template: `<div class="min-h-screen flex justify-center 
    items-center bg-gray-600">
      <Markup  :socials="signupOptions" class="shadow-xl"/>
  </div>`,
  data() {
    return {
      signupOptions: [
        { name: "google+", icon: googleIcon },
        { name: "facebook", icon: facebookIcon },
        { name: "twitter", icon: twitterIcon },
      ],
    }
  },
})
