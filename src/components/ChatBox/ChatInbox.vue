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
      <div class="w-full scrollable">
        <!-- TODO: object iteration for timestamps in this.conversations -->
        <div
          v-for="(v, k) in conversations"
          :key="v.timestamp"
          class="relative"
        >
          <date-divider :date="k" />
          <!-- TODO: array iteration for messages in conversation -->
        </div>
      </div>
      <div>
        <!-- TODO: form input for message -->
      </div>
    </div>
  </div>
</template>

<script>
import { time, day } from "./utils/date"
import DateDivider from "./DateDivider"

export default {
  name: "Solution",
  components: { DateDivider },
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
.recipient .status {
  height: 6px;
  width: 6px;
}
.recipient:before {
  content: "";
}
.date-divider:before,
.date-divider:after {
  content: "";
  @apply absolute w-5/12 border border-gray-300;
}
.date-divider:before {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.date-divider:after {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
