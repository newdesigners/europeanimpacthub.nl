<template>
  <div class="container" v-editable="blok">
    <div class="post-single__section">
      <aside class="text-15 pb-5 lg:pb-9">
        <Breadcrumb />
      </aside>
      <article class="">
        <figure class="w-full rounded-xl overflow-hidden">
          <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt" class="post-single__src">
        </figure>
        <div class="md:w-3/5">
          <h1 class="text-center">{{ blok.title }}</h1>
          <p>{{ blok.excerpt }}</p>
          <div class="">       
          </div>
        </div>
      </article>
    </div>
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