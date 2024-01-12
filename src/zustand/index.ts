import { create } from "zustand";
import { UserSlice, createUserSlice } from "./user";

const useStore = create<UserSlice>((...a) => ({
  ...createUserSlice(...a),
}));

export default useStore;
