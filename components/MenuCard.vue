<template>
  <div
    class="
      min-h-[200px]
      lg:min-h-[420px]
      bg-cover bg-no-repeat bg-center
      rounded-md
    "
    :style="{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${blok.image.filename})`,
    }"
  >
    <a class="h-full p-2.5 lg:p-7 flex flex-col" :href="blok.url.cached_url">
      <h2 class="text-20 lg:text-30 text-primary pb-2.5">{{ blok.title }}</h2>
      <div
        class="text-13 lg:text-20 pb-2.5 pr-12 flex-1 lg:pb-7 richtext--white"
      >
        <rich-text-renderer :document="blok.content" />
      </div>

      <div class="flex justify-end">
        <a class="btn" :href="blok.url.cached_url"> Lees meer </a>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      url: Object,
      _uid: String,
      image: { filename: String },
      title: String,
      content: Object,
    },
  },
};
</script>