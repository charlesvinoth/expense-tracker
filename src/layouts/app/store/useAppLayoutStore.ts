import { create } from 'zustand'

type AppLayoutStore = {
  isDrawerOpen: boolean
  isDrawerCollapsed: boolean
  setDrawerOpen: () => void
  setDrawerCollapsed: () => void
}

const useAppLayoutStore = create<AppLayoutStore>()((set) => ({
  isDrawerOpen: false,
  isDrawerCollapsed: false,
  setDrawerOpen: () =>
    set((state) => ({
      isDrawerOpen: !state.isDrawerOpen,
    })),
  setDrawerCollapsed: () =>
    set((state) => ({
      isDrawerCollapsed: !state.isDrawerCollapsed,
    })),
}))

export default useAppLayoutStore
