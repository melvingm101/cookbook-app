import { StateCreator } from "zustand";

export interface UserSlice {
  user: {
    isUserLoaded: boolean;
    isUserLoggedIn: boolean;
    setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
    setIsUserLoaded: () => void;
  };
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set
) => ({
  user: {
    isUserLoaded: false,
    isUserLoggedIn: false,
    setIsUserLoggedIn: (isUserLoggedIn: boolean) =>
      set((state) => ({ ...state, user: { ...state.user, isUserLoggedIn } })),
    setIsUserLoaded: () =>
      set((state) => ({
        ...state,
        user: { ...state.user, isUserLoaded: true },
      })),
  },
});
