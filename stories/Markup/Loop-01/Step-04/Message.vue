<template>
  <div
    :class="[message.sender]"
    class="w-full flex flex-col"
    v-if="message.type === 'message'"
  >
    <span class="mb-2 text-sm text-gray-500 font-semibold">
      {{ message.timestamp | time }}
    </span>
    <div
      class="message-text"
      :class="colors[message.sender]"
      :style="baseStyles"
    >
      {{ message.message }}
    </div>
  </div>
  <alert
    v-else
    :message="message.message"
    :category="message.category"
    :style="baseStyles"
  />
</template>

<script>
import { time } from "./utils/date"
import Alert from "./Alert"

const defaultBaseStyles = {
  padding: "0.75rem",
  fontWeight: "600",
  color: "#2D3748",
  fontSize: "0.875rem",
  borderRadius: "0.125rem",
}
export default {
  name: "Message",
  components: { Alert },
  props: {
    message: {
      type: Object,
      required: true,
    },
    baseStyles: {
      type: Object,
      default() {
        return defaultBaseStyles
      },
    },
    colors: {
      type: Object,
      default() {
        return {
          user: "bg-blue-100",
          recipient: "bg-gray-200",
        }
      },
    },
  },
  filters: {
    time,
  },
}
</script>

<style scoped>
.message-text {
  position: relative;
  max-width: 75%;
}
.user {
  align-items: flex-start;
}
.recipient {
  align-items: flex-end;
}
.user .message-text:before,
.recipient .message-text:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: 0;
  border: 10px solid transparent;
}

.user .message-text:before {
  left: -8px;
  transform: rotate(5deg);
  border-top-color: #ebf8ff;
}
.recipient .message-text:before {
  right: -8px;
  transform: rotate(-5deg);
  border-top-color: #edf2f7;
}
</style>
