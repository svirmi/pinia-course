import { defineStore } from "pinia";

type User = {
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
};

type UserState = {
  isAuthenticated: boolean;
  user: User;
};

export const useAuthStore = defineStore("auth", {
  state: () =>
    <UserState>{
      isAuthenticated: false,
      user: {},
    },

  actions: {
    logout() {
      this.$state = { isAuthenticated: false, user: {} }; // $patch method see here https://youtu.be/G4H6QOcGKbU?t=3335
    },
    async login() {
      const res = await fetch("https://reqres.in/api/users/12?delay=1");
      const { data } = await res.json();
      if (data.email) {
        this.user = data;
        this.isAuthenticated = true;
      }
    },
  },
  getters: {
    fullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`;
    },
  },
});
