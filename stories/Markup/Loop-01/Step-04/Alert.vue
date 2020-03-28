<template>
  <div class="alert" :class="colors[category]">
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
          error: "bg-pink-300",
          update: "bg-green-300",
        }
      },
    },
  },
}
</script>

<style scoped>
.alert {
  align-self: self-end;
}
</style>
