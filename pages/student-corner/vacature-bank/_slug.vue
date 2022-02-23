<template>
  <div class="container pb-16 lg:pb-24">
    <SingleSharePost :blok="blok" :projects="jobs" />
  </div>
</template>
 

<script>
export default {
  head({ _data }) {
    const { title, excerpt, image } = _data.blok;
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: excerpt,
        },
        image?.id
          ? {
              hid: "og:image",
              property: "og:image",
              content: image.filename,
            }
          : {},
      ],
    };
  },
  async asyncData({ $storyapi, params }) {
    const data = (
      await $storyapi.get(
        "cdn/stories/student-corner/vacature-bank/" + params.slug,
        {
          version: Date.now(),
        }
      )
    ).data.story;

    data.jobs = (
      await $storyapi.get(
        "cdn/stories?starts_with=student-corner/vacature-bank",
        {
          version: Date.now(),
        }
      )
    ).data.stories
      .filter(
        (story) =>
          story.content?.component === "post" && story.slug !== data.slug
      )
      .map((story) => ({
        category: story.content.Tag,
        date: story.first_published_at,
        slug: story.slug,
        image: story.content.image,
        article: story.content.article,
        name: story.content.title,
        type: "job",
      }))
      .sort((a, b) =>
        new Date(a.date).valueOf() > new Date(b.date).valueOf() ? -1 : 1
      );

    console.log(data.jobs);
    return {
      blok: {
        category: data.content.Tag,
        date: data.published_at,
        title: data.content.title,
        excerpt: data.content.excerpt,
        article: data.content.article,
        image: data.content.image,
        type: "job",
      },
      jobs: data.jobs,
    };
  },
};
</script>