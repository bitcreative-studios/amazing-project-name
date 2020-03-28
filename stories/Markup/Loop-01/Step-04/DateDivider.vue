<template>
  <div
    ref="divider"
    class="divider relative text-center uppercase text-gray-400 font-semibold"
  >
    <span ref="date" class="date px-1">{{ date | day }}</span>
  </div>
</template>

<script>
import { day } from "./utils/date"

export default {
  name: "DateDivider",
  props: {
    date: {
      type: [String, Date],
      required: true,
    },
  },
  mounted() {
    const { width: textWidth } = this.$refs.date.getBoundingClientRect()
    const { width: containerWidth } = this.$refs.divider.getBoundingClientRect()
    const textPadding = window
      .getComputedStyle(this.$refs.date)
      .getPropertyValue("padding-left")
      .replace(/px/, "")
      .trim()
    const width = (containerWidth - (textWidth + textPadding)) / 2
    // const computedStyles = window.getComputedStyle(
    //   this.$refs.divider,
    //   ":before"
    // )
  },
  filters: {
    day,
  },
}
</script>

<style scoped>
.divider:before,
.divider:after {
  content: "";
  @apply absolute w-5/12 border border-gray-300;
}
.divider:before,
.divider:after {
  top: 50%;
  transform: translateY(-50%);
}
.divider:before {
  left: 0;
}
.divider:after {
  right: 0;
}
</style>
