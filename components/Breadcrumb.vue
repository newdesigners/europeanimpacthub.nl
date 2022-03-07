<template>
  <ol vocab="http://schema.org/" typeof="BreadcrumbList">
    <!-- <li property="itemListElement" typeof="ListItem">
      <NuxtLink property="item" typeof="WebPage" to="/">
        <span property="name">Home</span>
      </NuxtLink>
      <meta property="position" content="1" />
    </li> -->
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <NuxtLink property="item" typeof="WebPage" :to="crumb.path">
        <span property="name">{{
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        }}</span>
      </NuxtLink>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
const titleCase = require("ap-style-title-case");
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      let params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";

      params = params.filter((p) => {
        return p !== "";
      });
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, " ")).split("?")[0],
            ...match,
          });
        }
      });
      return crumbs;
    },
  },
};
</script>

<style scoped>
ol {
  @apply list-none pb-1;
}

li {
  @apply inline text-black;
}

li:after {
  content: " > ";
  @apply inline text-black;
}

li:last-child:after {
  content: "";
}

li a {
  @apply text-black no-underline hover:text-primary;
}

li a.nuxt-link-exact-active.nuxt-link-active {
  @apply underline;
}
</style>