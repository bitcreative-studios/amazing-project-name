<template>
  <div
    @click="$emit('click')"
    class="cursor-pointer pl-5 pr-3 py-5 flex
        justify-between items-center"
  >
    <span class="flex"
      ><span> <img class="h-8 mr-3" :src="cardLogo" alt=""/></span>
      <span class="text-md uppercase font-semibold text-gray-800">{{
        name
      }}</span></span
    >
    <span v-if="selected">
      <svg
        fill="#5AC550"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "CreditCardOption",
  props: {
    cardLogo: {
      type: String,
      default() {
        return {}
      },
    },
    name: {
      type: String,
      require: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
