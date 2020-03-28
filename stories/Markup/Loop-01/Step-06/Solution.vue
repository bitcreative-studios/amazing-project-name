<template>
  <div class="member-registration bg-white rounded text-sm">
    <!-- SIGN UP SECTION -->
    <div>
      <div class="px-16 py-20">
        <div class="flex flex-col">
          <div class="flex flex-col mb-12">
            <h1 class="mb-3 text-5xl font-light">Become a member</h1>
            <div class="text-gray-600 font-semibold">
              <p>
                Use social networks to join us instantly.
              </p>
              <p>You won't spend any time confirming those boring emails.</p>
            </div>
          </div>
          <div v-for="(social, i) in socials" :key="i" class="social-option">
            <img :src="social.icon" class="h-5" />
            <span class="signup-text self-center"
              >sign up with {{ social.name }}</span
            >
          </div>
        </div>
      </div>
      <div
        class="px-16 py-10 flex justify-between items-center border-t border-gray-300"
      >
        <span>You can still sign up with your email address</span>
        <a href="#" class="signup-text">sign up with email</a>
      </div>
    </div>
    <!-- SIDE IMAGE -->
    <div class="side-image"></div>
  </div>
</template>

<script>
export default {
  name: "Solution",
  props: {
    socials: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.member-registration {
  min-width: 1050px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  @apply text-gray-900;
}

.side-image {
  background: url("./img/side.jpg") center no-repeat;
  background-size: cover;
  @apply rounded-r;
}
.signup-text {
  @apply text-xs uppercase text-gray-600 font-bold whitespace-no-wrap;
}
.social-option {
  display: inline-grid;
  grid-auto-flow: column;
  @apply cursor-pointer p-4 border border-gray-300 rounded transition duration-200;
}
.social-option:hover {
  @apply shadow-md;
}
.social-option + .social-option {
  @apply mt-4;
}
</style>
