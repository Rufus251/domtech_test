<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  color?: string
  page?: number
  datePublish?: string
  image?: string
  shortText?: string
  slug?: string
  title?: string
}>()
</script>

<template>
  <article>
    <img :src="image" alt="card image" />
    <h2>{{ shortText }}</h2>
    <div class="date">
      <img
        src="@/assets/icons/pigGreen.svg"
        alt="color icon"
        v-if="color === 'GREEN'" />
      <img
        src="@/assets/icons/lightningPink.svg"
        alt="color icon"
        v-if="color === 'PINK'" />
      <img
        src="@/assets/icons/fireYellow.svg"
        alt="color icon"
        v-if="color === 'YELLOW'" />
      <span
        :class="{
          green: color === 'GREEN',
          yellow: color === 'YELLOW',
          pink: color === 'PINK',
        }">
        {{ datePublish }}
      </span>
    </div>
  </article>
</template>

<style scoped>
article {
  max-width: 264px;
  width: 100%;

  border-radius: 16px;
  overflow: hidden;

  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 1347px) {
  article {
    max-width: 231px;
  }
}
@media (max-width: 480px) {
  article {
    max-width: 210px;
  }
}

article > img {
  max-width: 264px;
  width: 100%;

  height: 216px;
}
@media (max-width: 1347px) {
  article > img {
    max-width: 231px;
  }
}
@media (max-width: 480px) {
  article > img {
    max-width: 210px;
  }
}

h2 {
  max-width: 216px;
  width: 100%;

  margin-top: 22px;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 700;
  line-height: 23px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (max-width: 1347px) {
  h2 {
    max-width: 183px;
    font-size: 16px;
  }
}
@media (max-width: 580px) {
  h2 {
    max-width: 162px;
  }
}

.date {
  margin-top: auto;
  margin-bottom: 25px;

  max-width: 216px;
  width: 100%;

  display: flex;
  justify-content: space-between;
}
@media (max-width: 1347px) {
  .date {
    max-width: 183px;
  }
}
@media (max-width: 580px) {
  .date {
    max-width: 162px;
  }
}

.date > img {
  max-width: 18px;
  max-height: 18px;
}
.date > span {
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
}
@media (max-width: 480px) {
  .date > span {
    font-size: 16px;
  }
}

.green {
  color: #378b60;
}

.yellow {
  color: #fb9600;
}

.pink {
  color: #ff00b8;
}
</style>
