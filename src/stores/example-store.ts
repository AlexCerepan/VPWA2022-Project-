import { defineStore } from 'pinia';

export const Store = defineStore('store', {
  state: () => ({
    counter: 0,
    change: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    fromValue: (state) => state.change,
  },
  actions: {
    increment() {
      this.counter++;
    },
    changeForm() {
      this.change = !this.change;
    },
  },
});
