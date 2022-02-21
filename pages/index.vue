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
export default {
  async asyncData({ $storyapi }) {
    const homeData = storyBlocksContentTransformers(
      (await $storyapi.get("cdn/stories/home", { version: Date.now() })).data
        .story.content.body
    );

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

    return {
      ...homeData,
    };
  },
};
</script>