<template>
  <div class="container pb-16 lg:pb-24">
    <SingleSharePost :blok="blok" :projects="jobs" />
  </div>
</template>
 

<script>
function formatData(data) {
  return {
    category: data.content.Tag,
    date: data.published_at,
    title: data.content.title,
    excerpt: data.content.excerpt,
    article: data.content.article,
    image: data.content.image,
    type: "job",
  };
}
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
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("input", (event) => {
        if (event.story.id === this.story.id) {
          this.blok = formatData(event.story);
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(["published", "change"], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
  async asyncData({ $storyapi, params }) {
    const result = await $storyapi.get(
      "cdn/stories/student-corner/vacature-bank/" + params.slug,
      { version: Date.now() }
    );

    result.data.story.jobs = (
      await $storyapi.get(
        "cdn/stories?starts_with=student-corner/vacature-bank",
        {
          version: Date.now(),
        }
      )
    ).data.stories
      .filter(
        (story) =>
          story.content?.component === "post" &&
          story.slug !== result.data.story.slug
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

    return {
      story: result.data.story,
      blok: formatData(result.data.story),
    };
  },
};
</script>