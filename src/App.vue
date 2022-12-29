<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

function logout() {
  authStore.$state = { isAuthenticated: false, user: {} }; // $patch method see here https://youtu.be/G4H6QOcGKbU?t=3335
}

function login() {
  authStore.$reset();
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
        <button @click="login" v-else>Login</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
