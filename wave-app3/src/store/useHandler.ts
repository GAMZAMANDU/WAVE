// store.ts
import { create } from 'zustand';

const MAX_NUMBER = 8;

interface HandlerState {
  id: number;
  toNext: () => void;
}

/**
 * 1부터 8까지의 동작이 존재
 */
const useHandler = create<HandlerState>((set) => ({
  id: 0,
  toNext: () => set((state) => ({ id: (state.id + 1) % MAX_NUMBER })),
}));

export default useHandler;
