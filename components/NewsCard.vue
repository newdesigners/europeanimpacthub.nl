<template>
  <div
    class="w-full h-full mx-auto"
  >
    <a
      class="h-full flex flex-col items-start sm:flex-row sm:items-stretch md:flex-col"
      :href="blok.url"
    >
      <figure class="w-full relative bg-primary pt-[43%] md:pt-[35%] xl:pt-[43%] h-full overflow-hidden rounded-t-md lg:rounded-t-xl sm:w-[57%] sm:rounded-none sm:rounded-l-md md:rounded-none md:rounded-t-md md:w-full">
        <img
          class="block max-h-full max-w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <article class="flex flex-col bg-secondary text-white p-2.5 w-full rounded-b-md lg:rounded-b-xl sm:flex-1 sm:p-5 sm:rounded-none sm:rounded-r-md md:rounded-none md:rounded-b-md">
        <p class="pb-1.5 text-primary font-medium text-10 uppercase lg:text-15">{{ blok.category }}</p>
        <h2 class="text-15 font-normal pb-2 flex-1 lg:text-20 lg:pb-4 xl:pb-9">{{ blok.name }}</h2>
        <p class="text-right text-10 text-white uppercase lg:text-15">{{ date }}</p>
      </article>
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

<style scoped>
.news-card--first a {
  @apply md:flex-row  !important;
}

.news-card--first figure {
  @apply md:rounded-none md:rounded-l-md md:w-[57%] lg:rounded-l-xl !important;
}

.news-card--first article {
  @apply md:rounded-none md:rounded-r-md lg:rounded-r-xl lg:p-10 !important;
}

.news-card--first article p {
  @apply lg:text-20 !important;
}

.news-card--first article h2 {
  @apply lg:text-30 !important;
}
</style>