<template>
  <section>
    <PageIntro
      :blok="{
        image: {
          filename: 'https://picsum.photos/1440/900'
        },
        title: 'Student Corner',
        description: 'Studenten zijn de professionals van de toekomst. Daarom spelen zij een centrale rol in veel van onze activiteiten: van minors tot events en stageplaatsen.',
        triangle: 'blue',
      }"
    />
    <RichText
      :blok="{
        content: `
          <p>Kennis wordt ingezet voor het opleiden van een nieuwe generatie professionals en het maken van impact op de werkvloer. Ons team richt zich op vakgebieden als bestuurskunde, bedrijfskunde, communicatie en recht.</p>
        `,
        text_align: 'center',
      }"
    />
    <CircleCardPreview
      :blok="{
        posts: [
          {
            image: {
              filename: 'https://picsum.photos/1350/431',
              alt: 'some alt text for image',
            },
            title: 'Projecten',
            url: '/student-corner/projecten/',
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/432',
              alt: 'some alt text for image',
            },
            title: 'Vacature Bank',
            url: '/student-corner/vacature-bank/',
          },
        ],
      }"
    />
    <SocialMediaPreview
      :blok="{
        media: [
          {
            image: {
              filename: 'https://picsum.photos/1350/431',
              alt: 'some alt text for image',
            },
            title: 'Global Gossip',
            sub_title: 'Spotify Embed',
            description: 'Luister de laatste aflevering van Global Gossip via een Spotify Embed.',
            type: 'spotify',
            url: 'https://www.google.com/'
          },
          {
            image: {
              filename: 'https://picsum.photos/1350/432',
              alt: 'some alt text for image',
            },
            title: 'Social Media',
            sub_title: 'Update',
            description: 'Volg je ons al op social media? Bekijk onze meest recente social media post en blijft op de hoogte van alle updates die nog komen in de toekomst!!',
            type: 'instagram',
            url: 'https://www.google.com/'
          },
        ],
      }"
    />
  </section>
</template>

<script>
export default {};
</script>