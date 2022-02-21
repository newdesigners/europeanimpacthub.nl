<template>
  <div class="">
    <aside class="text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="">
      <figure
        class="
          w-full
          rounded-xl
          relative
          bg-primary
          pt-[45%]
          lg:pt-[32%]
          overflow-hidden
          mb-2.5
          md:mb-8
        "
      >
        <img
          class="
            block
            max-h-full max-w-full
            h-full
            absolute
            top-0
            left-0
            right-0
            bottom-0
            object-cover object-center
          "
          v-if="blok.image"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <div class="md:mx-auto md:w-3/5">
        <h1 class="text-black md:text-center text-18 md:text-35 pb-1.5 md:mb-3">
          {{ blok.title }}
        </h1>
        <p
          class="text-black font-medium pb-8 md:pb-16 md:text-20 md:font-normal"
        >
          {{ blok.excerpt }}
        </p>
        <div class="rich-text rich-text--post">
          <rich-text-renderer v-if="blok.body" :document="blok.body" />
        </div>
      </div>
    </article>
    <footer class="mx-auto md:w-3/5">
      <!-- Todo: has to be modular. change people -->
      <Banner v-if="blok.type === 'service'" :people="blok.contactPersons" />
    </footer>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  props: {
    blok: {
      type: Object,
    },
  },
  components: { Banner },
};
</script>