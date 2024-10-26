<script setup lang="ts">
import { defineModel } from 'vue'

const model = defineModel()
</script>

<template>
  <div class="search">
    <img src="@/assets/icons/search.svg" alt="search icon" />
    <input type="text" v-model="model" />
  </div>
</template>

<style scoped>
.search {
  position: relative;
}
img {
  position: absolute;

  right: 12px;
  top: 11px;
}
img:hover {
  cursor: pointer;
  opacity: 0.95;
}
input {
  width: 100%;
  height: 45px;

  padding: 12px 18px;
  padding-right: calc(18px + 24px);

  border: 2px solid black;
  border-radius: 12px;

  font-weight: 500;
  font-size: 16px;
}
</style>
