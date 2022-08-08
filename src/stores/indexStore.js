import { defineStore, acceptHMRUpdate } from 'pinia'

var interval
export const useIndexStore = defineStore({
  id: 'index',
  state: () => ({
    patterButtonArray: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    patternArray: [
      ['E', 'B', 'G', 'D', 'A', 'E'],
      ['F', 'C', 'G#', 'D#', 'A#', 'F'],
      ['F#', 'C#', 'A', 'E', 'B', 'F#'],
      ['G', 'D', 'A#', 'F', 'C', 'G'],
      ['G#', 'D#', 'B', 'F#', 'C#', 'G#'],
      ['A', 'E', 'C', 'G', 'D', 'A'],
      ['A#', 'F', 'C#', 'G#', 'D#', 'A#'],
      ['B', 'F#', 'D', 'A', 'E', 'B'],
      ['C', 'G', 'D#', 'A#', 'F', 'C'],
      ['C#', 'G#', 'E', 'B', 'F#', 'C#'],
      ['D', 'A', 'F', 'C', 'G', 'D'],
      ['D#', 'A#', 'F#', 'C#', 'G#', 'D#'],
      ['E', 'B', 'G', 'D', 'A', 'E'],
    ],
    clickPattern: '',
  }),
  getters: {},
  actions: {
    handleOnChangePattern(pattern) {
      this.clickPattern = pattern
    },
    resetPattern() {
      this.clickPattern = ''
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}
