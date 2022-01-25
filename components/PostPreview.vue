 <template>
  <div
    class="pb-12 lg:pb-24"
  >
    <article class="container relative">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-14">
        <li>
          <PostCard
            :blok="{
              image: {
                filename: 'https://picsum.photos/1350/430',
                alt: 'some alt text for image'
              },
              title: 'Beleidsonderzoek & evaluatie',
              excerpt: 'European Impact Hub is onderdeel van de Haagse Hogeschool: de grootste hbo-opleider van toekomstige professionals op het gebied van Europese studies, (internationale) bestuurskunde, (internationaal- en Europees) recht, (internationale) communicatie en bedrijfskunde in Nederland. Tijdens hun opleiding voeren studenten praktijkopdrachten uit voor Tijdens hun opleiding voeren studenten praktijkopdrachten uit voor echte opdrachtgevers. Via Student Consultancy kunnen ze helpen met een Europees vraagstuk in uw organisatie.',
            }"
          />
        </li>
        <li>
          <PostCard
            :blok="{
              image: {
                filename: 'https://picsum.photos/1350/431',
                alt: 'some alt text for image'
              },
              title: 'Beleidsonderzoek & evaluatie',
              excerpt: 'We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            }"
          />
        </li>
        <li>
          <PostCard
            :blok="{
              image: {
                filename: 'https://picsum.photos/1350/433',
                alt: 'some alt text for image'
              },
              title: 'Beleidsonderzoek & evaluatie',
              excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            }"
          />
        </li>
        <li>
          <PostCard
            :blok="{
              image: {
                filename: 'https://picsum.photos/1350/434',
                alt: 'some alt text for image',
              },
              title: 'Beleidsonderzoek & evaluatie',
              excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            }"
          />
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
export default {
};
</script>
