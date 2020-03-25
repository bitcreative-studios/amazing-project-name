<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",

  data() {
    return {}
  },

  methods: {
    onClick() {
      this.$emit("click")
    },
  },
}
</script>

<style></style>
