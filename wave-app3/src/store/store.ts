// store.ts
import { create } from 'zustand';


interface ModeState {
  mode: number;
  useMode: (value: number) => void;
}

/**
* 0 : 수정모드, 1 : 실행모드
*/
const useMode = create<ModeState>((set) => ({
  mode: 0,
  useMode: (value) => set((state) => ({ mode: value })),
}));

export default useMode;
