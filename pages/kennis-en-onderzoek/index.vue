<template>
  <section>
    <PageIntro
      :blok="{
        image: {
          filename: 'https://picsum.photos/1440/900'
        },
        title: 'Kennis & Onderzoek',
        description: 'Als lectoraat op de Haagse Hogeschool doen wij onderzoek naar de praktijk van Europees werken.'
      }"
    />
    <RichText
      :blok="{
        content: `
          <p>Kennis wordt ingezet voor het opleiden van een nieuwe generatie professionals en het maken van impact op de werkvloer. Ons team richt zich op vakgebieden als bestuurskunde, bedrijfskunde, communicatie en recht.</p>
        `,
        text_align: 'center',
      }"
    />
    <PostPreview
      :blok="{
        posts: [
          {
            image: {
              filename: 'https://picsum.photos/1350/431',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/kennis-en-onderzoek/slug_here',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/432',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/kennis-en-onderzoek/slug_here',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/433',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/kennis-en-onderzoek/slug_here',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/434',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/kennis-en-onderzoek/slug_here',
          },
        ],
      }"
    />
  </section>
</template>

<script>
export default {};
</script>