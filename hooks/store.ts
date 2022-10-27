import create from 'zustand'

type useDarkmodeType = {
  darkmode: boolean
  setDarkmode: () => void
}
export const useDarkmode = create<useDarkmodeType>((set) => ({
  darkmode: true,
  setDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
}))

type useFirstAccessType = {
  firstAccess: boolean
  setFirstAccess: () => void
}
export const useFirstAccess = create<useFirstAccessType>((set) => ({
  firstAccess: true,
  setFirstAccess: () => set((state) => ({ firstAccess: !state.firstAccess })),
}))
