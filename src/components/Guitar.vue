<script setup>
import { ref } from 'vue'
import { useIndexStore } from '../stores/indexStore'
const indexStore = useIndexStore()
</script>

<template>
  <div class="buttonBox">
    <button
      v-for="(
        patternButton, patternButtonIndex
      ) in indexStore.patterButtonArray"
      :key="patternButtonIndex"
      @click="indexStore.handleOnChangePattern(patternButton)"
    >
      {{ patternButton }}
    </button>
  </div>
  <div class="guitar">
    <div
      v-for="(fingerBoard, fingerBoardIndex) in indexStore.patternArray"
      :key="fingerBoardIndex"
      :class="`fingerBoard fingerBoard${fingerBoardIndex}`"
    >
      <div
        v-for="(pattern, patternIndex) in fingerBoard"
        :key="patternIndex"
        :class="`pattern ${
          indexStore.clickPattern === ''
            ? ''
            : indexStore.clickPattern === pattern
            ? 'red'
            : 'gray'
        }`"
      >
        {{ pattern }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttonBox {
  padding-bottom: 10px;
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  position: relative;
  button {
    font-size: 20px;
    width: 40px;
    height: 40px;
  }
}
.guitar {
  width: 80%;
  margin: auto;
  color: black;
  text-align: center;
  font-size: 20px;
  display: flex;
  border: 2px solid black;
}

.fingerBoard {
  position: relative;
  border-right: 2px solid black;
  width: calc(100% / 12);
  &.fingerBoard0 {
    position: absolute;
    left: 4%;
    border-right: 2px solid transparent;
    .pattern {
      border-bottom: 1px solid transparent;
    }
  }
  &:last-child {
    border-right: none;
  }
  &.fingerBoard3:after,
  &.fingerBoard5:after,
  &.fingerBoard7:after,
  &.fingerBoard9:after,
  &.fingerBoard12:after {
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 50%;
    right: 0;
    left: 0;
    margin: auto;
    bottom: -25px;
  }
}
.pattern {
  border-bottom: 1px solid gray;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  &:last-child {
    border-bottom: none;
  }
}
.red {
  color: red;
  font-weight: bold;
}
.gray {
  color: #d0d0d0;
  font-weight: 300;
}
</style>
