<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Guitar from './components/Guitar.vue'
import Metronome from './components/Metronome.vue'

import { useIndexStore } from './stores/indexStore'
const indexStore = useIndexStore()
</script>

<template>
  <h1 class="h1" @click="indexStore.resetPattern()">吉他指板教學</h1>
  <Guitar />
  <Metronome />
</template>

<style lang="scss" scoped>
.h1 {
  color: black;
  text-align: center;
  font-size: 30px;
  padding: 20px 0;
  cursor: pointer;
}
</style>
