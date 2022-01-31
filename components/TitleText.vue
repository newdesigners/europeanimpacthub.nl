<template>
  <div>
    <article
      class="container pb-9 lg:pb-14 relative"
    >
    <div class="md:mx-auto md:w-4/5 lg:max-w-[780px]">
      <h1
        class="pb-4 lg:pb-5"
        :class="{
         'font-medium text-25 lg:text-50 text-center italic': blok.type === 'home',
         'font-bold text-18 lg:text-35 text-left': blok.type === 'secondary',
        }"
      >
        {{ blok.title }}
      </h1>
      <p
        class=""
        :class="{
         'text-center lg:text-25 font-medium': blok.type === 'home',
         'text-black': blok.type === 'secondary',
        }"
      >
        {{ blok.description }}
      </p>
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