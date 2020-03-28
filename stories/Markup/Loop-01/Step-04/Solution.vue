<template>
  <div class="conversations">
    <header class="p-4 flex justify-between items-center bg-blue-500">
      <div class="recipient flex items-center">
        <span
          class="status inline-block rounded-full"
          :class="active ? 'bg-green-300' : 'bg-white'"
        />
        <span class="name pl-3 uppercase text-white font-bold text-lg">{{
          recipient
        }}</span>
      </div>
      <span
        class="cursor-pointer opacity-50 hover:opacity-100 transition duration-150"
      >
        <svg
          fill="#FFFFFF"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </span>
    </header>
    <div class="p-4 flex flex-col items-center bg-white text-gray-800">
      <div class="w-full">
        <div
          v-for="(v, k) in conversations"
          :key="v.timestamp"
          class="conversation flex flex-col"
        >
          <date-divider :date="k" />
          <message
            v-for="message in v.messages"
            :key="message.timestamp"
            :message="message"
          />
        </div>
      </div>
      <div class="w-full border-t border-gray-400">
        <form
          @submit.prevent="noop"
          class="pt-4 flex justify-between items-center"
        >
          <input
            class="text-gray-900 placeholder-gray-800 focus:outline-none"
            type="text"
            name="message"
            placeholder="Enter your message"
            v-model="message"
          />
          <!-- TODO: form input for message -->
          <button
            type="submit"
            class="uppercase font-bold tracking-wider text-blue-400"
          >
            send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { time, day } from "./utils/date"
import DateDivider from "./DateDivider"
import Message from "./Message"

export default {
  name: "Solution",
  components: { Message, DateDivider },
  props: {
    conversations: {
      type: Object,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      message: null,
    }
  },
  methods: {
    noop: () => {},
  },
  filters: {
    day,
    time,
  },
}
</script>

<style scoped>
.conversations {
  min-width: 25rem;
  @apply max-w-sm;
}
.conversation > * {
  @apply mb-4;
}
.recipient .status {
  height: 6px;
  width: 6px;
}
</style>
