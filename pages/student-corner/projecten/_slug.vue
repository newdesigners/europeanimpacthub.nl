<template>
  <div class="container pb-16 lg:pb-24">
    <SingleSharePost :blok="blok" />
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
        "cdn/stories/student-corner/projecten/" + params.slug,
        {
          version: Date.now(),
        }
      )
    ).data.story;

    return {
      blok: {
        category: data.content.Tag,
        date: data.published_at,
        title: data.content.title,
        excerpt: data.content.excerpt,
        article: data.content.article,
        image: data.content.image,
        type: "service",
      },
    };
  },
};
</script>