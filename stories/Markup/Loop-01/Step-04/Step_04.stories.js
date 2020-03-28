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
const today = new Date()
const currentYear = today.getFullYear()
const currentMonth = today.getMonth()
const currentDate = today.getDate()

const timestamp01 = new Date(
  currentYear,
  currentMonth,
  currentDate,
  10,
  53
).getTime()

const timestamp02 = new Date(
  currentYear,
  currentMonth,
  currentDate,
  10,
  57
).getTime()

const timestamp03 = new Date(
  currentYear,
  currentMonth,
  currentDate,
  11,
  3
).getTime()

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
        [timestamp01]: {
          messages: [
            {
              message: "Hi, Mark! I made a new design for Messenger App.",
              type: "message",
              timestamp: timestamp01,
              sender: "user",
              category: null,
            },
            {
              message:
                "Yo! Send it to my assistant and we'll review it during the year.",
              type: "message",
              timestamp: timestamp02,
              sender: "recipient",
              category: null,
            },
            {
              message: "But Mark...",
              type: "message",
              timestamp: timestamp03,
              sender: "user",
              category: null,
            },
            {
              message: "You were blocked by the user",
              type: "alert",
              timestamp: timestamp03,
              sender: null,
              category: "error",
            },
          ],
        },
        [new Date(2020, 0, 25).getTime()]: {
          messages: [
            {
              message: "Hi, Mark! I made a new design for Messenger App.",
              type: "message",
              timestamp: timestamp01,
              sender: "user",
              category: null,
            },
            {
              message:
                "Yo! Send it to my assistant and we'll review it during the year.",
              type: "message",
              timestamp: timestamp02,
              sender: "recipient",
              category: null,
            },
            {
              message: "But Mark...",
              type: "message",
              timestamp: timestamp03,
              sender: "user",
              category: null,
            },
            {
              message: "You were blocked by the user",
              type: "alert",
              timestamp: timestamp03,
              sender: null,
              category: "error",
            },
          ],
        },
      },
    }
  },
})
