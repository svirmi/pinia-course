import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const authStore = useAuthStore();

  // two ways of store defining : https://youtu.be/G4H6QOcGKbU?t=4875
  // this way called "Composition API"
  // like getters?
  const doubleCount = computed(() => count.value * 2);
  const countDigitsLength = computed(() => count.value.toString().length);

  // like actions?
  function increment() {
    if (isAuthenticated()) {
      count.value++;
    }
  }

  function decrement() {
    if (isAuthenticated()) {
      count.value--;
    }
  }

  function isAuthenticated() {
    return authStore.isAuthenticated;
  }

  return { count, doubleCount, countDigitsLength, increment, decrement };
});
