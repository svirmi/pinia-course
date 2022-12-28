<script setup lang="ts">

import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

console.log(store.count);

</script>

<template>
  <main>
    Home page
  </main>
</template>
