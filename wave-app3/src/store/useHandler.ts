import { create } from 'zustand';

interface Content {
  [key: number]: string | null;
}

interface HandContent {
  hand_id: number;
  name: string;
  icon: string;
  content: Content;
}

interface HandlerState {
  hand_id: number;
  handContent: HandContent[];
  toNext: () => void;
  toAppend: (handler_id: number, content: string | null) => void;
}

const handContent: HandContent[] = [
  { 
    hand_id: 0,
    name: "swipe",
    icon: "file_open",
    content: { 0: "https://www.google.com" }
  },
  {
    hand_id: 1,
    name: "V",
    icon: "cancel",
    content: { 1: "5min" }
  },
  {
    hand_id: 2,
    name: "Index finger",
    icon: "cancel",
    content: { 2: null }
  },
  {
    hand_id: 3,
    name: "Three fingers",
    icon: "add_circle",
    content: { 3: null }
  }
];

const useHandler = create<HandlerState>((set) => ({
  hand_id: 0,
  handContent: handContent,
  toNext: () => set((state) => ({ hand_id: (state.hand_id + 1) % state.handContent.length })),
  toAppend: (handler_id, content) => set((state) => {
    const newHandContent = [...state.handContent];
    newHandContent[state.hand_id].content[handler_id] = content;
    return { handContent: newHandContent };
  })
  
}));

export default useHandler;
