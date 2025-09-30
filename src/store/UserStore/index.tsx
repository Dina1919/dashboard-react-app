import { create } from "zustand";

type User = {
    user : String;
    role : String;
}

type UserStore = {
    user : User | null;
    login : (userData : User) => void;
    logout : () => void;
}

const useUserStore = create<UserStore>((set) => ({
    user : null,
    login : (userData) => set({user : userData}),
    logout: () => set({user : null}),
}))

export default useUserStore;