<template>
  <div class="post max-w-6xl">
    <div
      class="flex flex-col justify-between px-8 py-10 bg-gray-700 text-white"
    >
      <slot name="title">Post Title</slot>
      <div class="flex items-center text-xl">
        <img :src="avatar" class="avatar h-16 w-16 rounded-full" />
        <span class="capitalize px-4">{{ author }}</span>
      </div>
    </div>
    <div class="bg-white pt-10 text-2xl font-light">
      <article class="post-body mb-10 px-8">
        <slot name="body">Post body</slot>
      </article>
      <div class="meta flex justify-between items-center p-8 text-lg">
        <div>
          <span>{{ published | date }}</span> -
          <span class="font-bold">{{ published | time }}</span>
        </div>
        <div class="flex items-center">
          <div
            class="grid mr-5"
            style="grid-auto-flow: column; align-items: center"
          >
            <svg
              fill="#000000"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span class="ml-2 text-gray-600">{{ comments }}</span>
          </div>
          <span>
            <svg
              fill="#000000"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solution",
  props: {
    author: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    published: {
      type: [String, Number],
      required: true,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  filters: {
    date(timestamp) {
      const dateObj = new Date(timestamp)
      const [day, date, year] = dateObj
        .toLocaleDateString(undefined, {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .split(",")
      return `${day} ${date
        .split(" ")
        .reverse()
        .join(" ")} ${year}`
    },
    time(timestamp) {
      const day = new Date(timestamp)
      return day.toLocaleTimeString(undefined, {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      })
    },
  },
}
</script>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 2fr 3fr;
}
.post-body > p + p {
  @apply mt-4;
}
.post-body > p:first-child:first-letter {
  font-size: 1.6em;
  @apply font-semibold;
}
.avatar {
  box-shadow: 0 5px 20px theme("colors.gray.900");
}
.meta {
  box-shadow: 0 2px 20px rgba(125, 125, 125, 0.125),
    0 4px 16px -2px rgba(0, 0, 0, 0.24);
}
</style>
