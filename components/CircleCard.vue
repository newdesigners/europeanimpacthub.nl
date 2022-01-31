<template>
  <div
    class="w-full h-full mx-auto"
  >
    <a
      class="h-full flex flex-col items-start"
      :href="blok.url"
    >
      <h2 class="relative py-3 lg:py-5 lg:text-35 text-center bg-primary w-full text-white rounded-t-md lg:rounded-t-xl after:bg-secondary after:w-[26px] after:h-[26px] after:lg:h-[50px] after:lg:w-[50px] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full">{{ blok.title }}</h2>
      <figure class="w-full relative bg-primary pt-[43%] overflow-hidden mb-4 rounded-b-md lg:rounded-b-xl">
        <img
          class="block max-h-full max-w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
    },
  },
};
</script>