<template>
  <!--  In a real life use case this outer tag would probably be a link -->
  <span
    class="avatar-root cursor-pointer border border-gray-400 p-2 rounded-full"
  >
    <svg
      class="h-8"
      fill="#000000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    color: {
      type: String,
    },
  },
}
</script>

<style scoped>
.avatar-root {
  @apply transition duration-150;
  box-shadow: 0 0 0 1px transparent;
}
.avatar-root:hover {
  box-shadow: 0 0 0 5px #ededed;
}
</style>
