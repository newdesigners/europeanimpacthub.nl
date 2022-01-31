 <template>
  <div
    class="pb-12 lg:pb-24"
  >
    <article class="container relative">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <li 
          v-for="(post, index) in blok.posts"
          :key="index"
        >
          <CircleCard
            :blok="post"
          />
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
    },
  },
};
</script>
