// store.ts
import { create } from 'zustand';

interface ModeState {
  mode: number;
  toMode: (value: number) => void;
  toggle: () => void; 
}

/**
 * 0 : 수정모드, 1 : 실행모드
 */
const useMode = create<ModeState>((set) => ({
  mode: 0,
  toMode: (value) => set(() => ({ mode: value })),
  toggle: () => set((state) => ({ mode: state.mode === 1 ? 0 : 1 })),
}));

export default useMode;
