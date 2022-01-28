<template>
  <div>
    <article
      class="container pb-9 lg:pb-14 relative"
    >
      <SocialMediaCard
        :blok="{
            image: {
              filename: 'https://picsum.photos/1350/431',
              alt: 'some alt text for image',
            },
            title: 'Global Gossip',
            sub_title: 'Spotify Embed',
            description: 'Luister de laatste aflevering van Global Gossip via een Spotify Embed.',
            type: 'spotify'
          }"
      />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
    },
  },
};
</script>