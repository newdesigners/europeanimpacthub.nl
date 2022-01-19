<template>
  <div
    class="min-h-[200px] lg:min-h-[420px] bg-cover bg-no-repeat bg-center rounded-md"
    :style="{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${require(`~/assets/images/image-horizontal.jpg`)})`}"
  >
    <a
      class="h-full p-2.5 lg:p-7 flex flex-col"
      href="#"
    >
      <h2 class="text-20 lg:text-30 text-primary pb-2.5">{{ blok.title }}</h2>
      <p class="text-13 lg:text-20 text-white pb-2.5 pr-12 flex-1 lg:pb-7">{{ blok.description }}</p>
      <div class="flex justify-end">
        <a class="btn"
          href="#"
        >
          Lees meer
        </a>
      </div>
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