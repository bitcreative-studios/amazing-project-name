<template>
  <div
    ref="divider"
    class="divider flex items-center text-center uppercase text-gray-400 font-semibold"
  >
    <span class="before line-segment" :style="{ width: segmentWidth }"></span>
    <span ref="date" class="date px-2 whitespace-no-wrap">{{
      date | day
    }}</span>
    <span class="after line-segment" :style="{ width: segmentWidth }"></span>
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
  data() {
    return {
      segmentWidth: null,
    }
  },
  mounted() {
    const { width: textWidth } = this.$refs.date.getBoundingClientRect()
    const { width: containerWidth } = this.$refs.divider.getBoundingClientRect()
    const textPadding = window
      .getComputedStyle(this.$refs.date)
      .getPropertyValue("padding-left")
      .replace(/px/, "")
      .trim()
    const width = (containerWidth - (textWidth + parseInt(textPadding) * 2)) / 2
    this.segmentWidth = `${width}px`
  },
  filters: {
    day,
  },
}
</script>

<style scoped>
.line-segment {
  @apply inline-block border border-gray-300;
}
</style>
