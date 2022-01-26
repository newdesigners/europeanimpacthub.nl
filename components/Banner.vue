<template>
  <div class="rounded-xl bg-secondary w-[90%] mx-auto">
    <div class="w-3/4 py-4 md:py-8 text-white mx-auto max-w-[400px]">
      <h2 class="font-black text-15 md:text-25 pb-2.5 md:pb-3 underline text-center">Interesse in samenwerking?</h2>
      <p class="pb-2 md:pb-4 md:text-20 text-white text-center">Neem contact met ons op voor een kennismakingsgesprek</p>
      <div class="flex flex-col space-y-4">
        <div class="flex gap-x-3.5 xl:gap-x-11 items-center">
          <figure class="rounded-full w-[76px] h-[76px] xl:w-[132px] xl:h-[132px] bg-secondary overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://picsum.photos/200/200"
              alt="some alt text"
            />
          </figure>
          <div class="flex-1">
            <p class="text-white">Naam</p>
            <p class="text-white">Email</p>
          </div>
        </div>
        <div class="flex gap-x-3.5 xl:gap-x-11 items-center">
          <figure class="rounded-full w-[76px] h-[76px] xl:w-[132px] xl:h-[132px] bg-secondary overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://picsum.photos/200/200"
              alt="some alt text"
            />
          </figure>
          <div class="flex-1">
            <p class="text-white">Naam</p>
            <p class="text-white">Email</p>
          </div>
        </div>
      </div>
    </div>
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