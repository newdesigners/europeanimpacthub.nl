<template>
  <section>
    <aside class="container text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article class="pb-12 lg:pb-24">
      <TitleText
        :blok="{
          type: 'secondary',
          title: title,
          description: description,
        }"
      />
      <ul class="container grid grid-cols-1 md:grid-cols-2 gap-7">
        <li v-for="(card, index) in projects" :key="index">
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
  async asyncData({ $storyapi }) {
    const data = (
      await $storyapi.get("cdn/stories/student-corner/projecten/", {
        version: Date.now(),
      })
    ).data.story.content;

    data.projects = (
      await $storyapi.get("cdn/stories?starts_with=student-corner/projecten", {
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

    return { ...data };
  },
};
</script>