<template>
  <div
    class="container pb-11"
  >
    <article class="">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <MenuCard
          :blok="{
            title: 'Kennis & Onderzoek',
            description: 'Vanuit ons lectoraat op de Haagse Hogeschool doen wij onderzoek naar de praktijk van Europees werk. Die kennis over impact op de werkvloer wordt ingezet voor het opleiden van een nieuwe generatie professionals. Ons team integreert kennis van de werkpraktijk in de vakgebieden Europese studies, bestuurskunde, bedrijfskunde, politicologie, communicatie en (internationaal) recht.'
          }"
        />
        <MenuCard
          :blok="{
            title: 'Diensten',
            description: 'Hoe blijf ik professioneel op de hoogte van wat er speelt in Brussel? Hoe kan mijn organisatie tijdig en effectief invloed uitoefenen op Europees beleid? European Impact Hub biedt producten en diensten om professionals en organisaties in Nederland op weg te helpen in de Europese Unie. Bekijk wat we voor jou kunnen doen.'
          }"
        />
        <MenuCard
          :blok="{
            title: 'Student Corner',
            description: 'Studenten zijn de professionals van de toekomst. Daarom spelen zij een centrale rol in onze activiteiten: van onderzoek ondersteuning tot evenementen en van praktijkopdracht tot stageplaats. Ontdek alles in onze Student Corner.'
          }"
        />     
        <MenuCard
          :blok="{
            title: 'Newsroom',
            description: 'Events, workshops, blogs en podcasts; er gaat geen week voorbij zonder activiteiten in onze hub. Volg alles in onze Newsroom.'
          }"
        />
      </div>
    </article>
  </div>
</template>

<script>
export default {
};
</script>