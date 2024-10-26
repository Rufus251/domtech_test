<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  width: string
  color: string
}>()
</script>

<template>
  <button>
    Загрузить
    <img
      src="@/assets/icons/pig.svg"
      alt="button icon"
      v-if="color === '#378B60'" />
    <img
      src="@/assets/icons/lightning.svg"
      alt="button icon"
      v-if="color === '#FF00B8'" />
    <img
      src="@/assets/icons/fire.svg"
      alt="button icon"
      v-if="color === '#FB9600'" />
  </button>
</template>

<style scoped>
button {
  width: v-bind(width);
  height: 56px;

  border-radius: 36px;
  border: none;

  background-color: v-bind(color);

  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.8px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
}
button:hover {
    opacity: 0.95;
}
</style>
