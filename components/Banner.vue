<template>
  <div class="rounded-md lg:rounded-xl bg-secondary w-[90%] mx-auto">
    <div class="w-3/4 py-4 md:py-8 text-white mx-auto max-w-[400px]">
      <h2
        class="
          font-black
          text-15
          md:text-25
          pb-2.5
          md:pb-3
          underline
          text-center
        "
      >
        Interesse in samenwerking?
      </h2>
      <p class="pb-2 md:pb-4 md:text-20 text-white text-center">
        Neem contact met ons op voor een kennismakingsgesprek
      </p>
      <div class="flex flex-col space-y-4">
        <div
          class="flex gap-x-3.5 xl:gap-x-11 items-center"
          v-for="person in people"
          :key="person"
        >
          <figure
            class="
              rounded-full
              w-[76px]
              h-[76px]
              xl:w-[132px] xl:h-[132px]
              bg-secondary
              overflow-hidden
            "
          >
            <img
              class="w-full h-full object-cover"
              :src="person.image.filename"
              :alt="person.image.alt"
            />
          </figure>
          <div class="flex-1">
            <p class="text-white">{{ person.name }}</p>
            <a :href="`mailto:${person.email}`" class="text-[16px] text-white">{{ person.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
    },
  },
};
</script>