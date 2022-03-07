<template>
  <div class="container pb-11">
    <article class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <MenuCard v-for="block of blocks" :key="block._uid" :blok="block" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    blocks: Array,
  },
};
</script>