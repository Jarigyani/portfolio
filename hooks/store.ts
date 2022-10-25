import create from 'zustand'
type Mode = {
  darkmode: boolean
  setDarkmode: () => void
}

export const useDarkmode = create<Mode>((set) => ({
  darkmode: true,
  setDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
}))
