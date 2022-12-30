import { defineStore } from "pinia";

type User = {
  name?: string | null;
  email?: string | null;
};

type UserState = {
  isAuthenticated: boolean;
  user: User;
};

export const useAuthStore = defineStore("auth", {
  state: () =>
    <UserState>{
      isAuthenticated: true,
      user: {
        name: "This Is Name",
        email: "mail@server.de",
      },
    },

  actions: {
    logout() {
      this.$state = { isAuthenticated: false, user: {} }; // $patch method see here https://youtu.be/G4H6QOcGKbU?t=3335
    },
    login() {
      this.$reset();
    },
  },
});
