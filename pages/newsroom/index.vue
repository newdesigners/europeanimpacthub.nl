<template>
  <section>
    <div class="container max-w-[1222px] pt-2.5 lg:pt-5 pb-16">
      <h1 class="text-black text-20 lg:text-28 pb-2.5 lg:pb-7">Recente Nieuws</h1>
      <div>
        <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
          <li
            v-for="(n, i) in news"
            :key="i"
            :class="{ 'col-span-full' : i === 0 }"
          >
            <NewsCard
              :class="{ 'news-card--first' : i === 0 }"
              :blok="n"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/431',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/432',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/433',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/434',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/435',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/436',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
        {
          category : 'Thema',
          name: 'De titel van deze kaart (nieuws) of een zin die de inhoud beschrijft.',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/437',
            alt: 'some alt text for image',
          },
          url: '/newsroom/slug_here',
        },
      ],
    };
  },
};
</script>