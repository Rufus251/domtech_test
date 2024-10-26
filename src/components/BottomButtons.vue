<script setup lang="ts">
import MyButton from './UI/button.vue'
import { onMounted, onUnmounted, ref } from 'vue'

import { useNewsStore } from '@/stores/newsStore.ts'
const newsStore = useNewsStore()

let windowWidth = ref(window.innerWidth)

function onWidthChange() {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))

enum NewsColors {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  PINK = 'PINK',
}
</script>

<template>
  <div class="buttons">
    <MyButton width="175px" color="#378B60" v-if="windowWidth > 670" @click="newsStore.fetchRandomNews(NewsColors.GREEN)"/>
    <MyButton width="210px" color="#378B60" v-else @click="newsStore.fetchRandomNews(NewsColors.GREEN)"/>

    <MyButton width="175px" color="#FF00B8" v-if="windowWidth > 670" @click="newsStore.fetchRandomNews(NewsColors.PINK)"/>
    <MyButton width="210px" color="#FF00B8" v-else @click="newsStore.fetchRandomNews(NewsColors.PINK)"/>

    <MyButton width="175px" color="#FB9600" v-if="windowWidth > 670" @click="newsStore.fetchRandomNews(NewsColors.YELLOW)"/>
    <MyButton width="430px" color="#FB9600" v-else @click="newsStore.fetchRandomNews(NewsColors.YELLOW)"/>
  </div>
</template>

<style scoped>
.buttons {
  max-width: 580px;
  width: 100%;

  margin: 25px auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}
@media (max-width: 670px) {
  .buttons {
    justify-content: center;
    gap: 6px;
  }
}
</style>
