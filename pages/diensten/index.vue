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
        //Data coming rich text editor
        content: `
          <p>Hoe blijf ik op de hoogte over wat er speelt in Brussel in mijn vakgebied? Hoe raakt nieuwe EU-wetgeving mijn bedrijf. Hoe kan ik invloed uitoefenen op Europees beleid? European Impact Hub biedt verschillende producten die Europees werken vergemakkelijken.</p>
          <p>Het overzicht hier onder geeft een indruk van ons aanbod voor Europese inspiratie en Europese oplossingen</p>
          <ul>
            <li>EU-scan - Europees werken in kaart gebracht</li>
            <li>Beleidsonderzoek en evaluatie</li>
            <li>Student consultancy</li>
            <li>Gastcollege (serie)</li>
            <li>Trainingen voor professionals</li>
          </ul>
        `
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
            url: '/diensten/slug_here',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/432',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/diensten/slug_here',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/433',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/diensten/slug_here',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/434',
              alt: 'some alt text for image',
            },
            title: 'Beleidsonderzoek & evaluatie',
            excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            url: '/diensten/slug_here',
          },
        ],
      }"
    />
  </section>
</template>

<script>
export default {};
</script>