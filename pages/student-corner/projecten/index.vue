<template>
  <section>
    <aside class="container text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="pb-12 lg:pb-24">
      <TitleText
        :blok="{
          type: 'secondary',
          title: content.title,
          description: content.description,
        }"
      />
      <ul class="container grid grid-cols-1 md:grid-cols-2 gap-7">
        <li v-for="(card, index) in content.projects" :key="index">
          <ShareCard :blok="card" />
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { storyBlocksContentTransformers } from "../../../utils/story-bloks-content-transformer";

export default {
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
          this.content = event.story.content;
          this.content.SEO = storyBlocksContentTransformers(
            event.story.content.blocks
          ).SEO;
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
      await $storyapi.get("cdn/stories/student-corner/minor-aanbod/", {
        version: Date.now(),
      })
    ).data.story;

    const data = story.content;

    data.projects = (
      await $storyapi.get("cdn/stories?starts_with=student-corner/minor-aanbod", {
        version: Date.now(),
      })
    ).data.stories
      .filter(
        (story) =>
          story.content?.component === "post" &&
          story.full_slug !== data.full_slug
      )
      .map((story) => ({
        category: story.content.Tag,
        date: story.first_published_at,
        url: story.slug,
        image: story.content.image,
        article: story.content.article,
        name: story.content.title,
        type: "project",
      }))
      .sort((a, b) =>
        new Date(a.date).valueOf() > new Date(b.date).valueOf() ? -1 : 1
      );

    const blockContent = storyBlocksContentTransformers(data.blocks);
    data.SEO = blockContent.SEO;

    return { content: data, story };
  },
};
</script>