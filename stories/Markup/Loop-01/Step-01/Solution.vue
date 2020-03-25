<template>
  <section
    class="cards min-w-sm max-w-xl lg:max-w-5xl p-5 mx-auto grid grid-cols-1 lg:grid-cols-3
      bg-white  rounded-md shadow-xl"
  >
    <InfoCard
      v-for="(card, i) in cards"
      :key="i"
      :price="card.price"
      :src="card.src"
    >
      <h3 slot="heading">
        {{ card.heading }}
      </h3>
      <p slot="body">
        {{ card.body }}
      </p>
    </InfoCard>
  </section>
</template>

<script>
import InfoCard from "./InfoCard"
import mobileImage from "./img/device.svg"
import desktopImage from "./img/laptop.svg"
import tvImage from "./img/monitor.svg"

export default {
  name: "Solution",
  components: { InfoCard },
  data() {
    return {
      cards: [
        {
          heading: "mobile",
          src: mobileImage,
          body: "Get notification about new releases in our mobile app.",
          price: 10,
        },
        {
          heading: "desktop",
          src: desktopImage,
          body:
            "Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.",
          price: 15,
        },
        {
          heading: "tv",
          src: tvImage,
          body:
            "Watch your favorite series at home on large screen with our TV application.",
          price: 20,
        },
      ],
    }
  },
}
</script>
