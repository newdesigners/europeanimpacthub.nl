 <template>
  <div class="pb-12 lg:pb-24">
    <article
      class="
        container
        relative
        after:block
        after:-z-10
        after:absolute
        after:bg-red
        after:top-0
        after:-left-full
        after:right-container-lg
        after:bottom-0
        after:rounded-r-lg
      "
    >
      <a class="block" href="#">
        <div class="flex gap-x-3 lg:gap-x-36 h-64 lg:h-96">
          <div class="flex-1 py-5 lg:py-9">
            <h2 class="underline pb-4 text-20 lg:text-30 text-white">
              Recent nieuws
            </h2>
            <p class="uppercase text-secondary lg:text-25 pb-1.5 lg:pb-3.5">
              event
            </p>
            <p class="text-white lg:text-20">
              De German Desk dient als een brug tussen ambitieuze studenten en
              bedrijven/organisaties die hulp zoeken bij het betreden van de
              Duitse markt
            </p>
          </div>
          <figure class="w-[46%] lg:w-2/5 h-full rounded-r-lg overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="~/assets/images/image-vertical.jpg"
              alt="some alt text"
            />
          </figure>
        </div>
      </a>
    </article>
  </div>
  <!-- TODO: Vue snip -->
</template>
<script>
export default {};
</script>
