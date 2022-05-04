<template>
  <div class="">
    <aside class="text-15 pb-5 lg:pb-9">
      <Breadcrumb />
    </aside>
    <article>
      <div class="sm:w-4/5 sm:mx-auto md:w-3/5">
        <p class="text-10 lg:text-20 text-black pb-2.5 lg:pb-4 text-center">
          <span class="uppercase">{{ blok.category }}</span>
          <span>|</span>
          <span class="uppercase">{{ date }}</span>
        </p>
        <h1
          class="
            text-13
            lg:text-30
            font-medium
            text-black
            pb-2.5
            lg:pb-5
            text-center
          "
        >
          {{ blok.title }}
        </h1>
      </div>
      <figure
        class="
          w-full
          rounded-xl
          relative
          bg-primary
          pt-[45%]
          lg:pt-[32%]
          overflow-hidden
          mb-4
          md:mb-8
        "
      >
        <img
          class="
            block
            max-h-full max-w-full
            h-full
            absolute
            top-0
            left-0
            right-0
            bottom-0
            object-cover object-center
            w-full
          "
          v-if="blok.image"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
      <div class="sm:w-4/5 sm:mx-auto md:w-3/5 pb-8">
        <p
          class="text-black font-medium pb-8 md:pb-16 md:text-20 md:font-normal"
        >
          {{ blok.excerpt }}
        </p>
        <div class="rich-text rich-text--post">
          <rich-text-renderer :document="blok.article" />
        </div>
      </div>
    </article>
    <aside class="sm:w-4/5 sm:mx-auto pb-5 lg:pb-10">
      <p class="font-bold text-10 lg:text-15 pb-2.5 text-black">
        Deel dit project
      </p>
      <div>
        <ul class="flex gap-2.5 lg:gap-6">
          <li v-for="(s, i) in socials" :key="i" class="flex items-center">
            <ShareNetwork
              :network="s"
              :url="path"
              :title="blok.title"
              :description="blok.excerpt"
            >
              <Resources class="w-4 h-4 lg:w-9 lg:h-9" :type="`icon-${s}`" />
            </ShareNetwork>
          </li>
          <li class="cursor-pointer" @click="copyUrl">
            <Resources class="w-4 h-4 lg:w-9 lg:h-9" type="icon-share" />
          </li>
        </ul>
      </div>
    </aside>
    <footer class="sm:w-4/5 sm:mx-auto">
      <h3
        v-if="blok.type === 'project'"
        class="font-normal text-20 lg:text-30 text-black pb-3 lg:pb-5"
      >
        Andere projecten
      </h3>
      <h3
        v-if="blok.type === 'job'"
        class="font-normal text-20 lg:text-30 text-black pb-3 lg:pb-5"
      >
        Andere vacatures
      </h3>
      <h3
        v-if="blok.type === 'news'"
        class="font-normal text-20 lg:text-30 text-black pb-3 lg:pb-5"
      >
        Recente nieuws
      </h3>
      <ul class="xl:flex gap-5">
        <li v-for="(p, i) in projects" :key="i" class="pb-5">
          <NuxtLink :to="p.slug" class="flex">
            <article class="flex gap-3.5 items-center lg:items-start">
              <figure
                class="
                  w-[93px]
                  h-[93px]
                  lg:w-[200px] lg:h-[200px]
                  rounded-md
                  overflow-hidden
                "
              >
                <img
                  class="w-full h-full object-cover"
                  :src="p.image.filename"
                  :alt="p.image.alt"
                />
              </figure>
              <div class="text-black flex-1">
                <p class="uppercase pb-2 lg:text-15">
                  <span class="text-primary">{{ p.category }}</span>
                  <span class="text-black hidden lg:inline pl-5">{{
                    date
                  }}</span>
                </p>
                <h4 class="font-normal text-15 lg:text-20 pb-2 max-w-[295px]">
                  {{ p.name }}
                </h4>
                <p class="uppercase lg:hidden">{{ date }}</p>
              </div>
            </article>
          </NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    socials() {
      return ["linkedin", "twitter"];
    },
    path() {
      return process.env.baseUrl + this.$nuxt.$route.fullPath;
    },
     date() {
      return this.$moment(this.blok.date).subtract(1, 'months').format('MMMM YYYY');
    },
  },
  props: {
    blok: {
      type: Object,
    },
    projects: {
      type: Array,
    },
    
    
  },
  methods: {
    async copyUrl() {
      console.log("ttt");
      try {
        let res = await this.$copyText(this.path);
      } catch (e) {
        console.error(e);
      }
    },
    formatDate(date) {
      console.log(date);
      return this.$moment(date).format("LL");
    },
  },
};
</script>