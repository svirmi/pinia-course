<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

function increment() {
  store.count++;
}

function decrement() {
  store.count--;
}

const countDigitsLength = store.count.toString().length;

</script>

<template>
  <div>
    <br />
    <button @click="decrement">-</button>
    Counter value: {{ store.count }}
    <button @click="increment">+</button>
    <br />
    Counter has {{ countDigitsLength }} digits
  </div>
</template>

<style scoped>

</style>
