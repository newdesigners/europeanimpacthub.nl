<template>
  <div>
    <article
      class="pb-9 lg:pb-14 relative md:flex md:gap-8"
    >
    <div
      v-for="(m, i) in blok.media" 
      :key="i"
      class="flex flex-col md:w-1/2"
    >
    <SocialMediaCard
      :reverse="i % 2 !== 0"
      :blok="m"
    />
    </div>
 
    </article>
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