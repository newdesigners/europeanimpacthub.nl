<template>
  <div class="container pb-16">
    <SinglePost :blok="blok" />
  </div>
</template>
 
<script>
function formatData(data) {
  return {
    category: data.content.Tag,
    date: data.published_at,
    title: data.content.title,
    excerpt: data.content.excerpt,
    body: data.content.body,
    image: data.content.image,
    type: "service",
    contactPersons: data.content.contactPersons,
  };
}
export default {
  data() {
    return {
      blok: {},
    };
  },
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
    const result = await $storyapi.get("cdn/stories/diensten/" + params.slug, {
      version: Date.now(),
    });

    return {
      story: result.data.story,
      blok: formatData(result.data.story),
    };
  },
};
</script>