<script setup>
import { ref, reactive, watchEffect, watch, computed } from 'vue'

const metronomeState = reactive({
  metronomeStart: false,
  bpm: 120,
  dotLength: 4,
  lightDot: null,
  counter: 4,
  btnString: '',
})

function onClickAddOrLessBtn(string) {
  return string === 'add' ? metronomeState.bpm++ : metronomeState.bpm--
}

function onClickBpmButton() {
  metronomeState.metronomeStart = !metronomeState.metronomeStart
  metronomeInterval()
}

watch(
  () => metronomeState.bpm,
  (newBpm, oldBpm) => {
    setTimeout(() => {
      clearInterval(toggleInterval)
      metronomeInterval(newBpm)
    }, 500)
  }
)

let toggleInterval = null
function metronomeInterval(bpm = metronomeState.bpm) {
  let bpmUnit = 60
  let millisecond = Math.floor((bpmUnit / bpm) * 1000)

  if (!metronomeState.metronomeStart || !bpm) {
    clearInterval(toggleInterval)
    return
  }

  metronomeState.lightDot = metronomeState.counter % metronomeState.dotLength
  toggleInterval = setInterval(() => {
    metronomeState.counter = metronomeState.counter + 1
    metronomeState.lightDot = metronomeState.counter % metronomeState.dotLength
    let audio = new Audio(
      'http://soundbible.com/mp3/Tick-DeepFrozenApps-397275646.mp3'
    )
    audio.play()
  }, millisecond)
}
</script>

<template>
  <h2>Metronome</h2>
  <div class="dotBox">
    <div
      class="dot"
      v-for="(dotItem, dotIndex) of [...Array(metronomeState.dotLength).keys()]"
      :class="`${metronomeState.lightDot === dotIndex ? 'light' : ''}`"
    />
  </div>
  <div class="MetronomeBox">
    <div class="controlBox">
      <div class="addBpm" @click="onClickAddOrLessBtn('add')">
        <span>+</span>
      </div>
      <div class="BpmBox">
        <input v-model="metronomeState.bpm" type="number" />
        <span
          :class="`${metronomeState.metronomeStart ? 'metronomeStart' : ''}`"
        >
          BPM
        </span>
      </div>
      <div class="lessBpm" @click="onClickAddOrLessBtn('less')">
        <span>-</span>
      </div>
    </div>
    <div class="btnBox">
      <button @click="onClickBpmButton()">
        <span v-if="metronomeState.metronomeStart">pause</span>
        <span v-else>start</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
h2 {
  color: black;
  text-align: center;
  font-size: 30px;
  padding: 20px 0;
  cursor: pointer;
  padding-top: 50px;
}
.dotBox {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 10px;
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    margin: 0 25px;
  }
  .light {
    background-color: yellow;
  }
}
.MetronomeBox {
  padding-top: 20px;
  width: 50%;
  margin: auto;
}
.btnBox {
  width: 50%;
  margin: auto;
  text-align: center;
  padding-top: 20px;
}
.controlBox {
  padding-top: 20px;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addBpm,
.lessBpm {
  border: 1px solid gray;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  font-size: 30px;
  position: relative;
  cursor: pointer;
  span {
    /* display: block; */
    text-align: center;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &::selection {
      background-color: transparent;
    }
  }
}
.disable {
  color: gray;
}
.BpmBox {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: blue;
  cursor: pointer;
  position: relative;
  input {
    text-align: center;
    font-size: 30px;
    background-color: transparent;
    border: none;
    width: 80%;
    &:focus {
      outline: none;
    }
  }
  span {
    position: absolute;
    bottom: 4px;
    font-size: 20px;
    color: black;
    &::selection {
      background-color: transparent;
    }
    &.metronomeStart {
      color: red;
    }
  }
  &::selection {
    background-color: transparent;
  }
}
</style>
