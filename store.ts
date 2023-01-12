import { create } from 'zustand'

type Copy = {
  copy: boolean
  changeCopy: () => void
}

export const useStore = create<Copy>((set) => ({
  copy: false,
  changeCopy: () => {
    set((state) => {
      return { copy: !state.copy }
    })
  },
}))
