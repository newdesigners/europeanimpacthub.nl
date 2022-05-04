<template>
  <div
    class="w-full h-full mx-auto"
  >
    <a
      class="h-full flex flex-col items-start"
      :href="blok.url"
    >
      <p
        class="relative px-2 pb-[7px] py-3 lg:py-7 lg:pb-4 lg:px-7 lg:text-30 w-full text-white rounded-t-md lg:rounded-t-xl"
        :class="{
          'bg-primary' : blok.type === 'project',
          'bg-secondary' : blok.type === 'job',
        }"
      >
        <span 
          class="uppercase"
          :class="{
            'text-secondary' : blok.type === 'project',
            'text-primary' : blok.type === 'job',
          }"
        >
          {{ blok.category }}
        </span>
        <span>|</span>
        <span class="capitalize">{{ blok.name }}</span>
      </p>
      <figure class="w-full relative bg-primary pt-[43%] h-full overflow-hidden rounded-b-md lg:rounded-b-xl">
        <img
          class="block max-h-full max-w-full w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
        <NuxtLink
          class="btn absolute z-10 right-[10px] bottom-[10px]"
          :to="blok.url"
        >
          Lees meer
        </NuxtLink>
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
  computed: {
    date() {
      return this.$moment(this.blok.date).format('LL');
    },
  },
};
</script>