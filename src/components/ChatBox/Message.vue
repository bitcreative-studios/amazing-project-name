<template>
  <div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      default: "user",
    },
    time: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
