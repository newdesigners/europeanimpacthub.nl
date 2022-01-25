<template>
  <section>
    <PageIntro
      :blok="{
        image: {
          filename: 'https://picsum.photos/1440/900'
        },
        title: 'Kennis & Onderzoek',
        description: 'Als lectoraat op de Haagse Hogeschool doen wij onderzoek naar de praktijk van Europees werken.'
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