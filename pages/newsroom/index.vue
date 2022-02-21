<template>
  <section>
    <div class="container max-w-[1222px] pt-2.5 lg:pt-5 pb-16">
      <h1 class="text-black text-20 lg:text-28 pb-2.5 lg:pb-7">
        {{ Hero.name }}
      </h1>
      <div>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10"
        >
          <li
            v-for="(n, i) in newsPosts"
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
  async asyncData({ $storyapi }) {
    const data = storyBlocksContentTransformers(
      (
        await $storyapi.get("cdn/stories/newsroom/", {
          version: Date.now(),
        })
      ).data.story.content.blocks
    );

    console.log(
      (
        await $storyapi.get("cdn/stories?starts_with=newsroom", {
          version: Date.now(),
        })
      ).data.stories
    );

    // get all newsroom posts
    data.newsPosts = (
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
      }));

    return { ...data };
  },
};
</script>