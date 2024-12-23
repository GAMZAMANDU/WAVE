import { create } from 'zustand';

interface Content {
  content: string | null;
}

interface HandContent {
  hand_id: number;
  name: string;
  icon: string;
  content: Content[];
}

interface HandlerState {
  hand_id: number;
  handContent: HandContent[];
  toNext: () => void;
}

const handContent: HandContent[] = [
  { 
    hand_id: 0,
    name: "swipe",
    icon: "file_open",
    content: [{ content: "https://www.google.com" }]
  },
  {
    hand_id: 1,
    name: "V",
    icon: "cancel",
    content: [{ content: "5min" }]
  },
  {
    hand_id: 2,
    name: "Index finger",
    icon: "cancel",
    content: [{ content: null }]
  },
  {
    hand_id: 3,
    name: "Three fingers",
    icon: "add_circle",
    content: [{ content: null }]
  }
];

const useHandler = create<HandlerState>((set) => ({
  hand_id: 0,
  handContent: handContent,
  toNext: () => set((state) => ({ hand_id: (state.hand_id + 1) % handContent.length })),
}));

export default useHandler;
