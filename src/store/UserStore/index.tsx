import { create } from "zustand";

type User = {
  avatar?: string;
  user: string;
  role: string;
};

type UserStore = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  login: (userData) => {
    set({ user: userData });
    localStorage.setItem("user", JSON.stringify(userData));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
}));

export default useUserStore;
