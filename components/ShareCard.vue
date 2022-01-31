<template>
  <div
    class="w-full h-full mx-auto"
  >
    <a
      class="h-full flex flex-col items-start"
      :href="blok.url"
    >
      <p class="relative px-2 py-3 lg:py-5 lg:text-35 bg-primary w-full text-white rounded-t-md lg:rounded-t-xl">
        <span class="uppercase text-secondary">{{ blok.category }}</span>
        <span>|</span>
        <span class="capitalize">{{ blok.name }}</span>
      </p>
      <figure class="w-full relative bg-primary pt-[43%] overflow-hidden rounded-b-md lg:rounded-b-xl">
        <img
          class="block max-h-full max-w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
        <NuxtLink
          class="btn absolute z-10 right-[10px] bottom-[10px]"
          :to="blok.url"
        >
          Lees meer
        </NuxtLink>
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
  computed: {
    date() {
      return this.$moment(this.blok.date).format('MMMM YYYY');
    },
  },
};
</script>