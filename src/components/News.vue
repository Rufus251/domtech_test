<script setup lang="ts">
import MyInput from '@/components/UI/input.vue'
import MyCard from '@/components/UI/card.vue'
import BottomButtons from '@/components/BottomButtons.vue'
import { ref, onMounted, watch } from 'vue'
import { useNewsStore } from '@/stores/newsStore.ts'

const newsStore = useNewsStore()

const searchQueryTimeout = ref('')
let timer: number | undefined
watch(searchQueryTimeout, value => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    newsStore.searchQuery = value
  }, 200)
})

onMounted(async () => {
  await newsStore.fetchDefaultNews()
})
</script>

<template>
  <main>
    <MyInput v-model="searchQueryTimeout" />

    <div class="cards">
      <MyCard
        v-for="card in newsStore.sortedNews"
        :key="card.slug"
        v-bind="card" />
    </div>
    <BottomButtons />
  </main>
</template>

<style scoped>
main {
  margin: 50px auto;

  max-width: 1416px;
}
@media (max-width: 1500px) {
  main {
    margin: 50px;
  }
}
@media (max-width: 580px) {
  main {
    margin: 20px;
  }
}
.cards {
  margin-top: 25px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 25px;
}
@media (max-width: 1400px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 830px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
