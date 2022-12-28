<script setup lang="ts">

import { useCounterStore } from '@/stores/counter';
import Counter from '@/components/Counter.vue';

const store = useCounterStore();

</script>

<template>
  <main>
    Home page
    <Counter />
  </main>
</template>
