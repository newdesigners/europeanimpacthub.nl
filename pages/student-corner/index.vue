<template>
  <section>
    <PageIntro
      :blok="{
        image: content.Hero.backgroundImage,
        title: content.Hero.name,
        description: content.Hero.Description,
        triangle: 'blue',
      }"
    />

    <div class="max-w-[800px] mx-auto text-center richtext mb-14">
      <rich-text-renderer :document="content.richText.richText" />
    </div>

    <CircleCardPreview
      :blok="{
        posts: [
          {
            image: content.projectblock.image,
            title: content.projectblock.title,
            url: '/student-corner/projecten/',
          },
          {
            image: content.vacatureblock.image,
            title: content.vacatureblock.title,
            url: '/student-corner/vacature-bank/',
          },
        ],
      }"
    />
    <SocialMediaPreview
      :blok="{
        media: [
          {
            image: content.spotifyBlock.image,
            title: content.spotifyBlock.title,
            sub_title: content.spotifyBlock.subtitle,
            description: content.spotifyBlock.content,
            type: 'spotify',
            url: content.spotifyBlock.url.cached_url,
          },
          {
            image: content.mediaBlock.image,
            title: content.mediaBlock.title,
            sub_title: content.mediaBlock.subtitle,
            description: content.mediaBlock.content,
            type: 'instagram',
            url: content.mediaBlock.url.cached_url,
          },
        ],
      }"
    />
  </section>
</template>

<script>
import { storyBlocksContentTransformers } from "../../utils/story-bloks-content-transformer";
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
      await $storyapi.get("cdn/stories/student-corner/", {
        version: Date.now(),
      })
    ).data.story;

    const data = storyBlocksContentTransformers(story.content.blocks);

    data.spotifyBlock = data["spotify/updateblock"];
    data.mediaBlock = data["spotify/updateblock_1"];

    return {
      content: data,
      story,
    };
  },
};
</script>
