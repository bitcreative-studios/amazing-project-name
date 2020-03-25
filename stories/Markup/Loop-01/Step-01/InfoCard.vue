<template>
  <div
    class="py-2 px-4 lg:py-6 lg:px-8 flex flex-col justify-center items-center
     hover:bg-gray-100 cursor-pointer
     transition duration-200"
  >
    <img class="h-16 lg:h-24" :src="src" alt="" />
    <h3
      class=" mt-12 mb-6 font-bold uppercase tracking-widest
       text-blue-500 text-md lg:text-xl"
    >
      <slot name="heading"></slot>
    </h3>
    <p
      class="w-56 lg:w-full px-2 lg:px-0 text-sm lg:text-md mb-6 text-center
       font-semibold text-gray-500"
    >
      <slot name="body"></slot>
    </p>
    <div class="tracking-tighter">
      <span class="price text-blue-500 font-bold"
        ><sup class="text-md lg:text-xl">$</sup
        ><span class="text-xl lg:text-3xl ">{{ price }}</span></span
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
