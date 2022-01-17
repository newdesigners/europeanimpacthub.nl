<template>
  <div
    class="flex flex-col p-2.5 lg:p-7 min-h-[200px] bg-cover bg-no-repeat bg-center rounded-md"
    :style="{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${require(`~/assets/images/image-horizontal.jpg`)})`}"
  >
    <h2 class="text-20 lg:text-30 text-primary pb-2.5">Kennis & Onderzoek</h2>
    <p class="text-13 lg:text-20 text-white pb-2.5 flex-1 lg:pb-7">Als lectoraat op de Haagse Hogeschool doen wij onderzoek naar de praktijk van Europees werken. Kennis wordt ingezet voor het opleiden van een nieuwe generatie professionals en het maken van impact op de werkvloer. Ons team richt zich op vakgebieden als bestuurskunde, bedrijfskunde, communicatie en recht.</p>
    <div class="flex justify-end">
      <a class="btn"
        href="#"
      >
        Lees meer
      </a>
    </div>
  </div>
</template>

<script>
export default {
};
</script>