<template>
  <section>
    <aside class="container text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="container pb-12 lg:pb-24">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-7">
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
          type: 'job',
          category : 'Stage',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/431',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'job',
          category : 'Student Assisent',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/432',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'job',
          category : 'Vrijwillege taken',
          name: 'Project German Desk',
          date: '2021-05-06T11:00:23.869Z',
          image: {
            filename: 'https://picsum.photos/1350/433',
            alt: 'some alt text for image',
          },
          url: '/student-corner/projecten/slug_here',
        },
        {
          type: 'job',
          category : 'Stage',
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