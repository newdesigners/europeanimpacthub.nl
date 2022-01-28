<template>
  <header class="bg-white w-full self-start z-50 delay-100 h-24 transition-height duration-500 ease-in-out sticky top-0 bg-blue-background overflow-hidden xl:h-initial xl:overflow-visible" :class="{ 'bg-primary xl:bg-white h-screen header--open' : isActive }">
    <div class="h-24 xl:h-initial container flex justify-between flex-wrap xl:justify-start xl:items-center xl:py-5">
      <div class="h-24 xl:h-initial w-full flex justify-between xl:w-initial">
        <NuxtLink
          class="flex items-center"
          to="/"
          @click.native="onClose"
        >
          <Logo class="text-primary" :class="{ 'text-secondary' : isActive }" />
        </NuxtLink>
        <aside class="flex justify-center items-center xl:hidden"> 
          <tasty-burger-button
            ref="hamburger"
            type="spin"
            :active="isActive"
            :color="color"
            :active-color="activeColor"
            :size="size"
            @toggle="onToggle"
          />
        </aside>
      </div>
      <div class="delay-200 transition duration-500 ease-out opacity-0 w-full text-18 text-white xl:flex xl:flex-1 xl:opacity-100 xl:h-full xl:justify-end" :class="{ 'block opacity-100' : isActive }">
        <ul class="xl:flex xl:items-center xl:h-full xl:text-secondary" @click="onClose">
          <li class="pb-5 xl:pb-0 xl:mr-9"><NuxtLink class="font-gt font-bold text-20 xl:text-23" to="/kennis-en-onderzoek">Kennis & Onderzoek</NuxtLink></li>
          <li class="pb-5 xl:pb-0 xl:mr-9"><NuxtLink class="font-gt font-bold text-20 xl:text-23" to="/diensten">Diensten</NuxtLink></li>
          <li class="pb-5 xl:pb-0 xl:mr-9"><NuxtLink class="font-gt font-bold text-20 xl:text-23" to="/student-corner">Student Corner</NuxtLink></li>
          <li class="pb-5 xl:pb-0"><NuxtLink class="font-gt font-bold text-20 xl:text-23" to="/newsroom">Newsroom</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      size: "s",
      color: "#3B4559",
      activeColor: "#3B4559"
    };
  },
  methods: {
    onToggle(active) {
      this.isActive = active;
    },
    onClose() {
      this.isActive = false;
    },
  },
}
</script>

<style scoped>
.header--open {
  @apply bg-primary xl:bg-white h-screen !important;
}
</style>