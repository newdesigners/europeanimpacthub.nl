<template>
  <section>
    <div class="container max-w-[1222px] pt-2.5 lg:pt-5 pb-16">
      <h1 class="text-black text-20 lg:text-28 pb-2.5 lg:pb-7">
        {{ content.Hero.name }}
      </h1>
      <div>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10"
        >
          <li
            v-for="(n, i) in content.newsPosts"
            :key="i"
            :class="{ 'col-span-full': i === 0 }"
          >
            <NewsCard :class="{ 'news-card--first': i === 0 }" :blok="n" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { storyBlocksContentTransformers } from "../../utils/story-bloks-content-transformer";
export default {
  head(ctx) {
    const { title, description, image } = ctx._data.content.SEO;
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
        const data = storyBlocksContentTransformers(event.story.content.blocks);
        Object.keys(data).forEach((key) => {
          this.$set(this.content, key, data[key]);
        });
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
      await $storyapi.get("cdn/stories/newsroom/", {
        version: Date.now(),
      })
    ).data.story;

    const content = storyBlocksContentTransformers(story.content.blocks);

    // get all newsroom posts
    content.newsPosts = (
      await $storyapi.get("cdn/stories?starts_with=newsroom", {
        version: Date.now(),
      })
    ).data.stories
      .filter((story) => story.content?.component === "post")
      .map((story) => ({
        category: story.content.Tag,
        date: story.first_published_at,
        url: story.full_slug,
        image: story.content.image,
        article: story.content.article,
        name: story.content.title,
      }))
      .sort((a, b) =>
        new Date(a.date).valueOf() > new Date(b.date).valueOf() ? -1 : 1
      )
      .sort((a, b) => (a.pinned ? 1 : -1));

    return {
      content,
      story,
    };
  },
};
</script>