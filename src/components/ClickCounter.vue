<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
  <div>
    <br />
    <button @click="store.decrement">-</button>
    Counter value: {{ store.count }}
    <button @click="store.increment">+</button>
    <br />
    Counter has {{ store.countDigitsLength }} digits
    <br />
    Doubled Counter value is {{ store.doubleCount }}
  </div>
</template>

<style scoped></style>
