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
});
