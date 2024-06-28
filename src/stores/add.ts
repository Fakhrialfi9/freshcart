import { reactive } from 'vue'

export const add = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})
