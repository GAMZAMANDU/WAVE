// store.ts
import { create } from 'zustand';

const MAX_NUMBER = 4;

interface HandlerState {
  id: number;
  toNext: () => void;
}

const useHandler = create<HandlerState>((set) => ({
  id: 0,
  toNext: () => set((state) => ({ id: (state.id + 1) % MAX_NUMBER })),
}));

export default useHandler;
