<template>
    <article
      class="container pb-9 lg:pb-16 relative"
    >
      <div class="mx-auto md:w-3/4 lg:max-w-[880px]">
        <div
          class="rich-text"
          :class="{ 'rich-text--center' : blok.text_align === 'center' }"
          v-html="blok.content"
        >
        </div>
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