<template>
  <section>
    <PageIntro
      :blok="{
        image: Hero.backgroundImage,
        title: Hero.name,
        description: Hero.Description,
      }"
    />

    <div class="max-w-[800px] mx-auto text-center richtext mb-14">
      <rich-text-renderer :document="richText.richText" />
    </div>

    <PostPreview
      :blok="{
        posts: posts,
      }"
    />
  </section>
</template>
<script>
import { storyBlocksContentTransformers } from "../../utils/story-bloks-content-transformer";
export default {
  async asyncData({ $storyapi }) {
    const data = storyBlocksContentTransformers(
      (
        await $storyapi.get("cdn/stories/kennis-en-onderzoek", {
          version: Date.now(),
        })
      ).data.story.content.blocks
    );

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
      ...data,
    };
  },
};
</script>