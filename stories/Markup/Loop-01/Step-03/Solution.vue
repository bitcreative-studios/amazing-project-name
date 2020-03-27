<template>
  <article class="invoice-component bg-white rounded px-20 py-12">
    <header class="mb-10">
      <div class="mb-4 flex justify-between items-center">
        <h2 class="text-2xl text-gray-900 font-semibold">SimpleWheels</h2>
        <avatar />
      </div>
      <p class="font-semibold text-gray-500" style="font-size: .9rem">
        Thanks for your order #2357654, your package will be on its way shortly.
      </p>
    </header>
    <div class="orders flex flex-col justify-between">
      <div v-for="(order, i) in orders" :key="i" class="flex justify-between">
        <span class="font-semibold capitalize text-gray-600 text-lg">{{
          order.name
        }}</span
        ><span class="text-gray-800 font-bold text-xl">${{ order.price }}</span>
      </div>
      <div class="flex justify-between">
        <span class="font-bold uppercase tracking-wide text-gray-600 text-lg"
          >total</span
        ><span class="text-gray-800 font-bold text-xl">${{ total }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import Avatar from "./Avatar"
export default {
  name: "Solution",
  components: { Avatar },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total() {
      return this.orders.reduce((sum, currentOrder) => {
        return (sum += currentOrder.price)
      }, 0)
    },
  },
}
</script>

<style scoped>
.invoice-component {
  --min-component-height: 500px;
  min-height: var(--min-component-height);
  background-image: url("./img/bicycle.png");
  background-size: 95%;
  background-repeat: no-repeat;
  background-position: center calc(var(--min-component-height) * 0.45);
}
.orders > * + * {
  @apply mt-4;
}
</style>
