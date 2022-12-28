<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { computed } from '@vue/reactivity';

const store = useCounterStore();

function decrement() {
  store.count--;
}

</script>

<template>
  <div>
    <br />
    <button @click="decrement">-</button>
    Counter value: {{ store.count }}
    <button @click="store.increment">+</button>
    <br />
    Counter has {{ store.countDigitsLength }} digits
  </div>
</template>

<style scoped>

</style>
