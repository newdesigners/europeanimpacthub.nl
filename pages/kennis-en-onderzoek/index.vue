<template>
  <section>
    <PageIntro
      :blok="{
        image: content.Hero.backgroundImage,
        title: content.Hero.name,
        description: content.Hero.Description,
      }"
    />

    <div class="max-w-[800px] mx-auto text-center richtext mb-14">
      <rich-text-renderer :document="content.richText.richText" />
    </div>

    <PostPreview
      :blok="{
        posts: content.posts,
      }"
    />
  </section>
</template>
<script>
import { storyBlocksContentTransformers } from "../../utils/story-bloks-content-transformer";
export default {
  data() {
    return {
      story: {},
      content: {},
    };
  },
  head({ _data }) {
    const { title, description, image } = _data.content.SEO;
    return {
      title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
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
          const data = storyBlocksContentTransformers(
            event.story.content.blocks
          );
          Object.keys(data).forEach((key) => {
            this.$set(this.content, key, data[key]);
          });
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
  async asyncData({ $storyapi }) {
    const story = (
      await $storyapi.get("cdn/stories/kennis-en-onderzoek", {
        version: Date.now(),
      })
    ).data.story;

    const data = storyBlocksContentTransformers(story.content.blocks);

    data.posts = (
      await $storyapi.get("cdn/stories?starts_with=kennis-en-onderzoek/", {
        version: Date.now(),
      })
    ).data.stories
      .filter((story) => story.content?.component === "onderzoek")
      .map((story) => ({
        url: story.full_slug,
        image: story.content.image,
        excerpt: story.content.excerpt,
        title: story.content.title,
      }))
      .sort((a, b) =>
        new Date(a.date).valueOf() > new Date(b.date).valueOf() ? -1 : 1
      );

    return {
      story,
      content: data,
    };
  },
};
</script>