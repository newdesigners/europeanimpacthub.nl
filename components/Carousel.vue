
<template>
  <div>
    <article
      class="pb-14 lg:pb-20 relative"
    >
    <div class="">
      <h2 class="text-20 lg:text-36 pb-5 lg:pb-8 text-center">Ontmoet het Team</h2>
      <VueSlickCarousel v-bind="slickOptions">
        <div>
          <div class="w-[150px] h-[150px] text-15 text-center">
            <figure class="w-full h-full rounded-md overflow-hidden mb-2.5 drop-shadow-team-member ">
              <img
                class="w-full h-full object-cover"
                src="~/assets/images/image-vertical.jpg"
                alt="some alt text"
              />
            </figure>
            <p class="font-medium text-black">Tibor Hargitai</p>
            <p class="text-black">Onderzoeker</p>
          </div>
        </div>
        <div>
          <div class="w-[150px] h-[150px] text-15 text-center">
            <figure class="w-full h-full rounded-md overflow-hidden mb-2.5 drop-shadow-team-member ">
              <img
                class="w-full h-full object-cover"
                src="~/assets/images/image-vertical.jpg"
                alt="some alt text"
              />
            </figure>
            <p class="font-medium text-black">Tibor Hargitai</p>
            <p class="text-black">Onderzoeker</p>
          </div>
        </div>
        <div>
          <div class="w-[150px] h-[150px] text-15 text-center">
            <figure class="w-full h-full rounded-md overflow-hidden mb-2.5 drop-shadow-team-member ">
              <img
                class="w-full h-full object-cover"
                src="~/assets/images/image-vertical.jpg"
                alt="some alt text"
              />
            </figure>
            <p class="font-medium text-black">Tibor Hargitai</p>
            <p class="text-black">Onderzoeker</p>
          </div>
        </div>
        <div>
          <div class="w-[150px] h-[150px] text-15 text-center">
            <figure class="w-full h-full rounded-md overflow-hidden mb-2.5 drop-shadow-team-member ">
              <img
                class="w-full h-full object-cover"
                src="~/assets/images/image-vertical.jpg"
                alt="some alt text"
              />
            </figure>
            <p class="font-medium text-black">Tibor Hargitai</p>
            <p class="text-black">Onderzoeker</p>
          </div>
        </div>
        <div>
          <div class="w-[150px] h-[150px] text-15 text-center">
            <figure class="w-full h-full rounded-md overflow-hidden mb-2.5 drop-shadow-team-member ">
              <img
                class="w-full h-full object-cover"
                src="~/assets/images/image-vertical.jpg"
                alt="some alt text"
              />
            </figure>
            <p class="font-medium text-black">Tibor Hargitai</p>
            <p class="text-black">Onderzoeker</p>
          </div>
        </div>
      </VueSlickCarousel>

    </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        infinite: true,
      },
    };
  },
};
</script>