<template>
  <section>
    <FullWidthImage :image="content.image.image.filename" />

    <div class="max-w-[800px] mx-auto text-center richtext mb-14">
      <rich-text-renderer :document="content.richText.richText" />
    </div>

    <MenuPreview :blocks="content.pageblocks.block" />
    <RecentNewsPreview :blok="{
        type: 'text',
        title: content.recentNews.title,
        link: content.recentNews.link
      }" />
    <Carousel
      :blok="{
        type: 'images',
        title: 'Ontmoet het Team',
        slides: content.teamMembers,
      }"
    />
    <Carousel
      :blok="{
        type: 'icons',
        title: 'Onze Partners',
        slides: content.Partners,
        
      }"
    />
  </section>
</template>

<script>
import { storyBlocksContentTransformers } from "../utils/story-bloks-content-transformer";
function handleData(data) {
  const homeData = Object.assign({}, storyBlocksContentTransformers(data));

  console.log(homeData);
  // fix partners
  homeData.Partners = homeData.Partners.Partners.map((p) => ({
    title: p.name,
    image: p.image,
  }));

  homeData.teamMembers = homeData.teamMembers.members.map((p) => ({
    name: p.name,
    title: p.function,
    image: p.image,
  }));

  return { ...homeData };
}
export default {
  data() {
    return {
      story: {},
      content: {},
    };
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("input", (event) => {
        if (event.story.id === this.story.id) {
          const data = handleData(event.story.content.body);
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
  async asyncData({ $storyapi }) {
    const story = (
      await $storyapi.get("cdn/stories/home", { version: Date.now() })
    ).data.story;

    const homeData = handleData(story.content.body);

    return {
      story,
      content: homeData,
    };
  },
};
</script>