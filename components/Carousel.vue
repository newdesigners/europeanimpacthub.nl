
<template>
  <div>
    <article
      class="pb-14 lg:pb-20 relative w-full"
    >
    <div class="w-full max-w-[100%] overflow-hidden">
      <h2 class="text-20 lg:text-36 pb-5 lg:pb-8 text-center">{{ blok.title }}</h2>
      <VueSlickCarousel v-bind="slickOptions">
        <div
          v-for="(slide, index) in blok.slides"
          :key="index"  
        >
          <div class="mx-3 w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] lg:mx-8 text-15 text-center">
            <figure
              class="w-full h-full rounded-md overflow-hidden mb-2.5"
              :class="{ 'drop-shadow-team-member' : blok.type === 'images' }"
            >
              <img
                class="w-full h-full"
                :class="{
                  'object-cover' : blok.type === 'images',
                  'object-contain' : blok.type === 'icons',
                }"
                :src="slide.image.filename"
                :alt="slide.image.alt"
              />
            </figure>
            <p
              v-if="slide.name !== ''" 
              class="font-medium text-black lg:text-20"
            >
              {{ slide.name }}
            </p>
            <p class="text-black lg:text-20">{{ slide.title }}</p>
          </div>
        </div>
      </VueSlickCarousel>

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
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
      },
      slides: [
        {
          name: 'Tibor Hargitai',
          title: 'Onderzoeker',
          image: {
            filename: 'https://picsum.photos/200',
            alt: 'some alt text',
          },
        },
        {
          name: 'Tibor Hargitai',
          title: 'Onderzoeker',
          image: {
            filename: 'https://picsum.photos/201',
            alt: 'some alt text',
          },
        },
        {
          name: 'Tibor Hargitai',
          title: 'Onderzoeker',
          image: {
            filename: 'https://picsum.photos/202',
            alt: 'some alt text',
          },
        },
        {
          name: 'Tibor Hargitai',
          title: 'Onderzoeker',
          image: {
            filename: 'https://picsum.photos/203',
            alt: 'some alt text',
          },
        },
      ],
    };
  },
};
</script>