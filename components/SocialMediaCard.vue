<template>
  <div
    class="w-full h-full"
  >
    <a
      class="flex py-5 gap-3 h-[228px]"
      :href="blok.url"
    >
      <div class="flex-1">
        <h2 class="underline text-20 pb-4">{{ blok.title }}</h2>
        <p class="uppercase text-primary pb-1.5">{{ blok.sub_title }}</p>
        <p class="font-medium">{{ blok.description }}</p>
      </div>
      <figure class="w-[35%] h-full rounded-r-md">
        <img
          class="w-full h-full object-cover"
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