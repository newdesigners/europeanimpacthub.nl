 <template>
  <div
    class="pb-9 lg:pb-24"
  >
    <article class="container relative after:block after:absolute after:bg-red after:top-0 after:-left-full after:right-container after:bottom-0 after:rounded-r-lg">
      <div class="relative z-10 flex gap-x-3">
        <div class="flex-1 py-5">
          <h2 class="underline pb-4 text-20 lg:text-30 text-white">Recente nieuws</h2>
          <p class="uppercase text-secondary lg:text-25 pb-1.5 lg:pb-3.5">event</p>
          <p class="font-medium text-white">De German Desk dient als een brug tussen ambitieuze studenten en bedrijven/organisaties die hulp zoeken bij het betreden van de Duitse markt</p>
        </div>
        <figure class="w-[45%] h-full rounded-r-lg overflow-hidden">
          <img class="w-full h-full object-cover" src="~/assets/images/image-vertical.jpg" alt="some alt text">
        </figure>
      </div>
    </article>
  </div>
</template>

<script>
export default {
};
</script>