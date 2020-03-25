<template>
  <div
    class="flex flex-col justify-center items-center
        hover:bg-gray-100 cursor-pointer py-6 px-8
        transition duration-200"
  >
    <img class="h-24" :src="src" alt="" />
    <h3
      class=" mt-12 mb-6 font-bold uppercase tracking-widest text-blue-500 text-xl"
    >
      <slot name="heading"></slot>
    </h3>
    <p class="mb-6 text-center font-semibold text-gray-500">
      <slot name="body"></slot>
    </p>
    <div class="tracking-tighter">
      <span class="price text-blue-500 font-bold"
        ><sup class="text-xl">$</sup
        ><span class="text-3xl ">{{ price }}</span></span
      ><span class="text-blue-500 text-xl pl-1">/ month</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    price: {
      type: Number,
    },
    src: {
      type: String,
    },
  },
}
</script>
