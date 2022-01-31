<template>
  <div
    class="mb-6 w-[95%] md:w-full h-full relative after:block after:absolute after:-z-10 after:bg-secondary after:top-0 after:-left-full after:right-0 after:bottom-0 after:rounded-r-md lg:after:rounded-r-2xl"
    :class="{ 'after:bg-red after:rounded-l-md lg:after:rounded-l-2xl after:left-0 after:-right-full self-end' : reverse }"
  >
    <a
      class="flex h-[228px] lg:h-[448px]"
      :class="{ 'flex-row-reverse' : reverse }"
      rel="noopener noreferrer"
      :href="blok.url"
    >
      <div
        class="triangle-bg flex-1 pt-5 lg:pt-10 relative flex flex-col after:w-[74px] lg:after:w-[145px] after:-z-1"
        :class="{
          'triangle-bg--small-blue pl-container lg:pl-container-lg pr-3 lg:pr-6' : !reverse,
          'triangle-bg--small pl-3 lg:pl-6 pr-container lg:pr-container-lg after:-right-1' : reverse 
        }"
      >
        <h2 class="underline text-20 pb-4 text-white lg:text-30">{{ blok.title }}</h2>
        <p 
          class="uppercase text-primary pb-1 lg:text-20"
          :class="{ 'text-secondary' : reverse }"
        >
          {{ blok.sub_title }}
        </p>
        <p class="font-mediumm text-white flex-1 lg:text-20">{{ blok.description }}</p>
        <aside class="self-end pb-3 lg:pb-5">
          <Resources 
            class="w-[22px] h-[22px] lg:w-[46px] lg:h-[46px]"
            :class="{ 'relative left-1/2 lg:left-[70%]' : reverse }" 
            :type="`icon-${ blok.type }`"
          />
        </aside>
      </div>
      <figure
        class="w-[42%] h-full overflow-hidden"
        :class="{
          'rounded-r-md lg:rounded-r-2xl': !reverse,
          'rounded-r-none rounded-l-md lg:rounded-l-2xl' : reverse,
        }"
      >
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
    reverse: Boolean,
    blok: {
      type: Object,
    },
  },
};
</script>