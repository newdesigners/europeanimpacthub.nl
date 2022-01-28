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
  </section>
</template>

<script>
export default {};
</script>