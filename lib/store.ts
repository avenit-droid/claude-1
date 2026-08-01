import { create } from "zustand";

export type Theme = "dark" | "light";
export type Locale = "ru" | "en";
export type CursorVariant = "default" | "hover" | "text" | "drag";

interface LuxoraState {
  theme: Theme;
  locale: Locale;
  cursorVariant: CursorVariant;
  isChatOpen: boolean;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  setLocale: (l: Locale) => void;
  setCursorVariant: (v: CursorVariant) => void;
  setChatOpen: (o: boolean) => void;
}

export const useLuxoraStore = create<LuxoraState>((set, get) => ({
  theme: "dark",
  locale: "ru",
  cursorVariant: "default",
  isChatOpen: false,
  setTheme: (t) => {
    set({ theme: t });
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = t;
      window.localStorage.setItem("luxora-theme", t);
    }
  },
  toggleTheme: () => get().setTheme(get().theme === "dark" ? "light" : "dark"),
  setLocale: (l) => {
    set({ locale: l });
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
      window.localStorage.setItem("luxora-locale", l);
    }
  },
  setCursorVariant: (v) => set({ cursorVariant: v }),
  setChatOpen: (o) => set({ isChatOpen: o }),
}));
