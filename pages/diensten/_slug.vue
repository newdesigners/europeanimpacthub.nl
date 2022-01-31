<template>
  <div class="container pb-16" v-editable="blok">
    <SinglePost :blok="blok" />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      blok: {
        title: 'Beleidsonderzoek & evaluatie',
        excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
        image: {
          filename: 'https://picsum.photos/1350/430',
          alt: 'some alt text here',
        },
        type: 'service',
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