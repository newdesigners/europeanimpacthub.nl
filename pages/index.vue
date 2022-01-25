<template>
  <section>
    <FullWidthImage />
    <TitleText />
    <MenuPreview />
    <RecentNewsPreview />
    <Carousel
      :blok="{
        type: 'images',
        title: 'Ontmoet het Team',
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
      }"
    />
    <Carousel
      :blok="{
        type: 'icons',
        title: 'Onze Partners',
        slides: [
          {
            title: 'Partner Name',
            image: {
              filename: require('~/assets/images/logo-example.svg'),
              alt: 'some alt text',
            },
          },
          {
            title: 'Partner Name',
            image: {
              filename: require('~/assets/images/logo-example-2.svg'),
              alt: 'some alt text',
            },
          },
          {
            title: 'Partner Name',
            image: {
              filename: require('~/assets/images/logo-example.svg'),
              alt: 'some alt text',
            },
          },
          {
            title: 'Partner Name',
            image: {
              filename: require('~/assets/images/logo-example.svg'),
              alt: 'some alt text',
            },
          },
        ],
      }"
    />
  </section>
</template>

<script>
export default {};
</script>