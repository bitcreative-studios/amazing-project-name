<template>
  <div class="preview-card relative max-w-6xl bg-white text-gray-800">
    <nav class="absolute w-full p-8 flex items-center justify-between">
      <a href="#" class="link flex items-center">
        <svg
          class="h-5"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
        <span class="ml-1">back</span>
      </a>
      <ul class="nav">
        <a href="#" class="link">netherlands</a>
        <a href="#" class="link active">spain</a>
        <a href="#" class="link">france</a>
      </ul>
    </nav>
    <div class="image" />
    <div class="content">
      <h1 class="title">Visiting the pastelle city</h1>
      <p class="meta text-xl">
        By <span class="font-bold">Jerry Henderson</span>, in Tourism
      </p>
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col">
          <a href="#" class="relative">
            <img
              class="mb-4"
              src="./img/preview.jpg"
              alt=""
              style="max-width: 90%"
            />
            <span class="play-button">
              <svg
                fill="#000000"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
          </a>
          <a href="#" class="text-sm uppercase font-semibold flex"
            ><span>view all photos</span>
            <svg
              class="h-5"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              />
            </svg>
          </a>
        </div>
        <div>
          <p class="text-lg leading-loose font-light text-gray-900">
            As you drive into the town from Alicante airport you will pass
            between two salt lakes - one is blue/green and the other is an
            impressive pink colour.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solution",
}
</script>

<style scoped>
.preview-card {
  display: grid;
  grid-template-columns: 1.25fr 2fr;
  box-shadow: 0 40px 25px -12px rgba(235, 89, 120, 0.45);
}
.content {
  display: grid;
  place-content: center;
  @apply px-24 pt-40 pb-32 gap-8;
}
.title,
.meta {
  font-family: "Playfair Display", serif;
}
.title {
  @apply relative text-6xl leading-tight font-bold;
}
.title:after {
  position: absolute;
  bottom: 20%;
  right: 0;
  content: "";
  width: calc(25%);
  height: 0;
  border: 2px solid theme("colors.gray.800");
}

.link {
  @apply uppercase text-gray-600 text-sm font-semibold transition duration-150;
}
.link:hover,
.link.active {
  @apply text-gray-800;
}
.nav .link + .link {
  @apply ml-6;
}
.image {
  background: url("./img/background.jpg") center;
  background-size: cover;
}
.play-button {
  @apply absolute h-12 w-12 flex justify-center items-center rounded-full;
  background: rgba(255, 255, 255, 0.6);
  top: 40%;
  left: 40%;
  transform: translate(-40%, -40%);
}
</style>
