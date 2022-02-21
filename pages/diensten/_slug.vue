<template>
  <div class="container pb-16">
    <SinglePost :blok="blok" />
  </div>
</template>
 
<script>
export default {
  async asyncData({ $storyapi, params }) {
    const data = (
      await $storyapi.get("cdn/stories/diensten/" + params.slug, {
        version: Date.now(),
      })
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
        contactPersons: data.content.contactPersons,
      },
    };
  },
};
</script>