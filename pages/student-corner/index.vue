<template>
  <section>
    <PageIntro
      :blok="{
        image: Hero.backgroundImage,
        title: Hero.name,
        description: Hero.Description,
        triangle: 'blue',
      }"
    />

    <div class="max-w-[800px] mx-auto text-center richtext mb-14">
      <rich-text-renderer :document="richText.richText" />
    </div>

    <CircleCardPreview
      :blok="{
        posts: [
          {
            image: projectblock.image,
            title: projectblock.title,
            url: '/student-corner/projecten/',
          },
          {
            image: vacatureblock.image,
            title: vacatureblock.title,
            url: '/student-corner/vacature-bank/',
          },
        ],
      }"
    />
    <SocialMediaPreview
      :blok="{
        media: [
          {
            image: spotifyBlock.image,
            title: spotifyBlock.title,
            sub_title: spotifyBlock.subtitle,
            description: spotifyBlock.content,
            type: 'spotify',
            url: spotifyBlock.url?.cached_url,
          },
          {
            image: mediaBlock.image,
            title: mediaBlock.title,
            sub_title: mediaBlock.subtitle,
            description: mediaBlock.content,
            type: 'instagram',
            url: mediaBlock.url?.cached_url,
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
    const data = storyBlocksContentTransformers(
      (
        await $storyapi.get("cdn/stories/student-corner/", {
          version: Date.now(),
        })
      ).data.story.content.blocks
    );

    data.spotifyBlock = data["spotify/updateblock"];
    data.mediaBlock = data["spotify/updateblock_1"];

    return { ...data };
  },
};
</script>