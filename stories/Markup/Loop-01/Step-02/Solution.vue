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
    <div class="pl-5 py-5 flex">
      <span><img class="h-8 mr-3" src="./img/visa.svg" alt=""/></span>
      <span
        class="text-md uppercase font-semibold
       text-gray-500"
        >visa</span
      >
      <span></span>
    </div>
    <div class="pl-5 pr-3 py-5 flex justify-between items-center">
      <span class="flex"
        ><span> <img class="h-8 mr-3" src="./img/mastercard.svg" alt=""/></span>
        <span class="text-md uppercase font-semibold text-gray-800"
          >mastercard</span
        ></span
      >
      <span>
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
    <div class="pl-5 py-5 flex">
      <span><img class="h-8 mr-3" src="./img/maestro.svg" alt=""/></span>
      <span
        class="text-md uppercase font-semibold
       text-gray-500"
        >maestro</span
      >
      <span></span>
    </div>
    <button
      class="w-full py-4 uppercase text-center bg-blue-600
      focus:outline-none text-white font-semibold rounded-b"
    >
      next step
    </button>
  </div>
</template>

<script>
export default {
  name: "Solution",
}
</script>

<style scoped>
.payment-card > * + *:not(:last-child) {
  min-width: 24rem;
  @apply border-t;
}
</style>
