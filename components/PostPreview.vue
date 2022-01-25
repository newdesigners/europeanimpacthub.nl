 <template>
  <div
    class="pb-12 lg:pb-24"
  >
    <article class="container relative">
      <ul>
        <li>
          <PostCard
            :blok="{
              image: {
                filename: 'https://picsum.photos/1350/430',
                alt: 'some alt text for image'
              },
              excerpt: 'Met één been in de wereld van onderzoek & onderwijs, met het andere been in de werkpraktijk: dat kenmerkt de teamleden van European Impact Hub. Deze brugfunctie geeft ons de ideale uitgangspositie om kennis in te zetten voor het verbeteren of veranderen van Europees werken. We doen dit voor overheden, ondernemingen en belangenorganisaties.',
            }"
          />
        </li>
      </ul>
    </article>
  </div>
  <!-- TODO: Vue snip -->
</template>
<script>
export default {
};
</script>
