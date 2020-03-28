<template>
  <article
    class="boarding-pass max-w-md p-10 bg-white font-semibold text-gray-800 rounded"
  >
    <div class="airports pt-4 mb-20 grid items-center">
      <!-- DEPARTURE -->
      <div class="flex flex-col">
        <span class="airport-shorthand">{{ ticket.departure.airport }}</span>
        <span class="meta-heading text-left">{{ ticket.departure.city }}</span>
      </div>
      <div class="w-8 divider  mx-auto border-t-8 border-blue-200"></div>
      <!-- ARRIVAL -->
      <div class="flex flex-col">
        <span class="airport-shorthand">{{ ticket.arrival.airport }}</span>
        <span class="meta-heading text-right">{{ ticket.arrival.city }}</span>
      </div>
    </div>
    <div class="mb-6 grid grid-cols-3 items-start">
      <div class="flex flex-col">
        <span class="meta-heading">flight</span>
        <span>{{ ticket.flight }}</span>
      </div>
      <div class="flex flex-col">
        <span class="meta-heading">gate</span>
        <span>{{ ticket.gate }}</span>
      </div>
      <div class="flex flex-col">
        <span class="meta-heading">seat</span>
        <span>{{ ticket.seat }}</span>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col">
          <span class="meta-heading">passenger</span
          ><span>{{ ticket.passenger }}</span>
        </div>
        <div class="flex flex-col">
          <span class="meta-heading">class</span><span>{{ ticket.class }}</span>
        </div>
        <div class="flex flex-col">
          <span class="meta-heading">departure</span
          ><span>{{ ticket.departureTime | timeDate }}</span>
        </div>
      </div>
      <img src="./img/qr.svg" alt="" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Solution",
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  filters: {
    timeDate(timestamp) {
      const timeOptions = {
        hour: "numeric",
        minute: "numeric",
      }
      const dateOptions = {
        month: "short",
        day: "numeric",
      }
      const day = new Date(timestamp)
      const date = day.toLocaleDateString("en-US", dateOptions)
      const time = day
        .toLocaleTimeString("en-US", timeOptions)
        .toLocaleLowerCase()
        .replace(/\s/, "")
      return `${time}, ${date}`
    },
  },
}
</script>

<style scoped>
.airports {
  grid-template-columns: 1fr 0.5fr 1fr;
  @apply gap-2;
}
.divider {
  border-top-width: 5px;
}
.airport-shorthand {
  font-family: "Poppins", sans-serif;
  @apply text-6xl leading-none font-black uppercase text-blue-600;
}

.meta-heading {
  @apply uppercase leading-none font-semibold text-gray-500;
}
</style>
