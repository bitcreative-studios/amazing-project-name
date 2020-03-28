<template>
  <div class="p-3 text-gray-800" :class="colors[type]">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      default: "error",
    },
    colors: {
      type: Object,
      default() {
        return {
          error: "bg-pink-200",
          update: "bg-green-200",
        }
      },
    },
  },
}
</script>
