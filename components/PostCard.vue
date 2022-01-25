<template>
  <div
    class=""
  >
    <a
      class="h-full p-2.5 lg:p-7 flex flex-col"
      href="#"
    >
      <figure>
        <img
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <h2>{{ blok.title }}</h2>
      <p>{{ blok.excerpt }}</p>
      <a 
        href="#"
        class="btn"
      >
        Lees meer
      </a>
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