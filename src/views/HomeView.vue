<script setup lang="ts">
import Counter from "@/components/ClickCounter.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const { isAuthenticated, fullName } = storeToRefs(useAuthStore()); // destructuring and reactivity see here https://youtu.be/G4H6QOcGKbU?t=3434
</script>

<template>
  <main>
    <br />

    <div v-if="isAuthenticated">User name is : {{ fullName }}</div>

    <Counter />
  </main>
</template>
