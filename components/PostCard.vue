<template>
  <div
    class="w-full h-full max-w-[600px] mx-auto"
  >
    <a
      class="h-full flex flex-col items-start"
      :href="blok.url"
    >
      <figure class="w-full relative bg-primary pt-[45%] overflow-hidden mb-4 rounded-md">
        <img
          class="block max-h-full max-w-full h-full w-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <h2 class="mb-2">{{ blok.title }}</h2>
      <p class="mb-4 md:flex-1 lg:text-20 overflow-hidden" v-snip="6">{{ blok.excerpt }}</p>
      <a 
        :href="blok.url"
        class="btn"
      >
        Lees meer
      </a>
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