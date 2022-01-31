<template>
  <section>
    <aside class="container text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="pb-12 lg:pb-24">
      <TitleText
        :blok="{
          type: 'secondary',
          title: 'Projecten',
          description: 'Een rapport of publicatie is bij ons nooit het einddoel van een onderzoek. Kennisopbouw is er om verschil te maken. Onze onderzoeksprojecten zijn gericht op het bereiken van impact op de werkvloer. Hiervoor werken we veelvuldig samen met organisaties uit de praktijk (publiek, privaat en NGO) en het hoger onderwijs. In al onze projecten kijken we naar een Europese component van dagelijks werk. Benieuwd naar wat we zoal doen? Hieronder vind je een overzicht van onze belangrijkste projecten.'
        }"
      />
      <ul class="container grid grid-cols-1 md:grid-cols-2 gap-7">
        <li
          v-for="(card, index) in cards"
          :key="index"
        >
          <ShareCard :blok="card"/> 
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          type: 'project',
          category : 'Minor',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/431',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'project',
          category : 'Minor',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/432',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'project',
          category : 'Minor',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/433',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'project',
          category : 'Minor',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/434',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
      ],
    }
  },
};
</script>