<script setup lang="ts">

  import Counter from '@/components/Counter.vue';

  import { useAuthStore } from '@/stores/auth';
  import { storeToRefs } from 'pinia';

  const { isAuthenticated, user } = storeToRefs(useAuthStore()); // destructuring and reactivity see here https://youtu.be/G4H6QOcGKbU?t=3434

</script>

<template>
  <main>
    <br />

    <div v-if="isAuthenticated">
      User name is : {{ user.name }}
    </div>
    
    <Counter />

  </main>
</template>
