<template>
  <h1 slot="title" class="flex flex-col text-4xl leading-tight">
    <span class="font-bold">{{ mainHeading }}:</span>
    <span class="highlight relative pb-4">{{ subHeading }} </span>
  </h1>
</template>

<script>
export default {
  name: "PostTitle",
  props: ["mainHeading", "subHeading"],
}
</script>

<style scoped>
.highlight:after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  @apply w-1/5 border-t-4 border-orange-500;
}
</style>
