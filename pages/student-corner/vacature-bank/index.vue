<template>
  <section>
    <aside class="container text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="pb-12 lg:pb-24">
      <ul class="container grid grid-cols-1 md:grid-cols-2 gap-7">
        <li v-for="(card, index) in projects" :key="index">
          <ShareCard :blok="card" />
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $storyapi }) {
    const data = (
      await $storyapi.get("cdn/stories/student-corner/vacature-bank/", {
        version: Date.now(),
      })
    ).data.story.content;

    data.projects = (
      await $storyapi.get(
        "cdn/stories?starts_with=student-corner/vacature-bank",
        {
          version: Date.now(),
        }
      )
    ).data.stories
      .filter((story) => story.content?.component === "post")
      .map((story) => ({
        category: story.content.Tag,
        date: story.first_published_at,
        url: story.slug,
        image: story.content.image,
        article: story.content.article,
        name: story.content.title,
        type: "job",
      }))
      .sort((a, b) =>
        new Date(a.date).valueOf() > new Date(b.date).valueOf() ? -1 : 1
      );

    return { ...data };
  },
};
</script>