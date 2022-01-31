<template>
  <div class="container pb-16 lg:pb-24">
    <SingleSharePost :blok="blok" />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      blok: {
        category: 'Stage',
        date: '2011-10-05T14:48:00.000Z',
        title: 'De titel van deze kaart (project) of een zin die de inhoud beschrijft.',
        excerpt: 'Hoe groot is het verwachte marktaandeel in Noordrhein Westfalen? Welke concurrenten kan je verwachten in Hessen? Heeft u de juiste middelen om de kenmerken van uw toekomstige klanten te identificeren en beschrijven? De German Desk biedt ambitieuze studenten die met jouw eisen en behoeften aan de slag willen. De German Desk is een innovatief Living Lab binnen De Haagse Hogeschool. Daarnaast is de German Desk een minor bij de European Studies. Hier worden studenten opgeleid tot junior accountmanagers voor het Duits-Nederlandse werkveld.',
        image: {
          filename: 'https://picsum.photos/1350/430',
          alt: 'some alt text here',
        },
        type: 'job',
        url: 'http://google.com'
      },
    };
  },
  // props: {
  //   blok: {
  //     type: Object,
  //     required: true,
  //   },
  // },
};
</script>