<template>
  <section>
    <FullWidthImage :image="image.image.filename" />

    <div class="max-w-[800px] mx-auto text-center richtext mb-14">
      <rich-text-renderer :document="richText.richText" />
    </div>

    <MenuPreview :blocks="pageblocks.block" />
    <RecentNewsPreview />
    <Carousel
      :blok="{
        type: 'images',
        title: 'Ontmoet het Team',
        slides: teamMembers,
      }"
    />
    <Carousel
      :blok="{
        type: 'icons',
        title: 'Onze Partners',
        slides: Partners,
      }"
    />
  </section>
</template>

<script>
import { storyBlocksContentTransformers } from "../utils/story-bloks-content-transformer";
function handleData(data) {
  const homeData = storyBlocksContentTransformers(data);

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

  return homeData;
}
export default {
  data() {
    return {
      SEO: {},
      Partners: [],
      image: {},
      pageblocks: [],
      recentNews: {},
      richText: {},
      teamMembers: [],
    };
  },
  head({ _data }) {
    const { title, description, image } = _data.SEO;
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
    const self = this;
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on("input", (event) => {
        const data = handleData(event.story.content.body);
        Object.keys(data).forEach((key) => {
          console.log("Mapping", key);
          self[key] = Object.assign({}, data[key]);
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
    const data = (
      await $storyapi.get("cdn/stories/home", { version: Date.now() })
    ).data.story.content.body;

    const homeData = handleData(data);

    return {
      ...homeData,
    };
  },
};
</script>