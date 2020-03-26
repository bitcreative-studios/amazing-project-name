<template>
  <div class="payment-card bg-white rounded">
    <div class="flex flex-col justify-center items-center">
      <div class="pt-3 select-none">
        <span class="inline-block h-2 w-2 rounded-full bg-gray-300" />
        <span class="inline-block h-2 w-2 rounded-full bg-gray-400" />
        <span class="inline-block h-2 w-2 rounded-full bg-gray-300" />
      </div>
      <h1
        class="pb-6 pt-4 px-16 text-2xl font-semibold uppercase
        tracking-wide text-gray-700"
      >
        payment method
      </h1>
    </div>
    <CreditCardOption
      v-for="creditCard in cardOptions"
      :key="creditCard.name"
      :card-logo="creditCard.cardLogo"
      :name="creditCard.name"
      :selected="creditCard.name === selected"
      class="hover:bg-gray-100 transition duration-200"
      @click="selected = creditCard.name"
    />
    <button
      class="w-full py-4 uppercase text-center bg-blue-600
      focus:outline-none text-white font-semibold rounded-b"
    >
      {{ action }}
    </button>
  </div>
</template>

<script>
import CreditCardOption from "./CreditCardOption"
export default {
  name: "Solution",
  components: { CreditCardOption },
  props: {
    cardOptions: {
      type: Array,
      required: true,
    },
    action: {
      type: String,
      default: "next step",
    },
  },
  data() {
    return {
      selected: "mastercard",
    }
  },
}
</script>

<style scoped>
.payment-card > * + *:not(:last-child) {
  min-width: 24rem;
  @apply border-t;
}
</style>
