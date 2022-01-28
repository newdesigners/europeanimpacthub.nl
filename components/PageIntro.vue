<template>
  <article
    class="page-intro bg-cover bg-center w-full min-h-[150px] lg:min-h-[464px] relative bg-primary mb-5 lg:mb-10 2xl:mb-20"
    :style="{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url('${ blok.image.filename }')`}"
  >
    <div class="container">
      <h1 class="text-primary pt-6 pb-4 lg:pb-8 lg:pt-16 lg:text-50">{{ blok.title }}</h1>
      <p class="text-white font-bold w-2/3 pb-10 lg:w-[70%] lg:text-30">{{ blok.description }}</p>
    </div>
  </article>
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