import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const authStore = useAuthStore();
  
  // like getters?
  const doubleCount = computed(() => count.value * 2);
  const countDigitsLength = computed(() => count.value.toString().length); 

  // like actions?
  function increment() {
    if (authStore.isAuthenticated) {
      count.value++;
    }
  }

  function decrement() {
    if (authStore.isAuthenticated) {
      count.value--;
    }
  }

  return { count, doubleCount, countDigitsLength, increment, decrement };
});
