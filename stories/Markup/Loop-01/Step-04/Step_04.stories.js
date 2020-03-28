import Index from "./Index"
import Markup from "./Solution"

export default {
  title: `Markup/Loop-01/Step-04`,
  component: Markup,
}

export const Discussion = () => ({
  components: { Index },
  template: `<Index/>`,
})

// This is not really needed to "implement" the design
import { TIMESTAMP_03, TIMESTAMP_01, TIMESTAMP_02 } from "./utils/date"

export const Solution = () => ({
  components: { Markup },
  template: `<div class="min-h-screen flex justify-center 
    items-center" style="background: linear-gradient(#ebf8ff,#90cdf4);">
      <Markup :conversations="conversations" :recipient="recipient" />
  </div>`,
  data() {
    return {
      recipient: "mark zuckerberg",
      conversations: {
        [TIMESTAMP_01]: {
          messages: [
            {
              message: "Hi, Mark! I made a new design for Messenger App.",
              type: "message",
              timestamp: TIMESTAMP_01,
              sender: "user",
              category: null,
            },
            {
              message:
                "Yo! Send it to my assistant and we'll review it during the year.",
              type: "message",
              timestamp: TIMESTAMP_02,
              sender: "recipient",
              category: null,
            },
            {
              message: "But Mark...",
              type: "message",
              timestamp: TIMESTAMP_03,
              sender: "user",
              category: null,
            },
            {
              message: "You were blocked by the user",
              type: "alert",
              timestamp: TIMESTAMP_03,
              sender: null,
              category: "error",
            },
          ],
        },
      },
    }
  },
})
