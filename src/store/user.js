import create from 'zustand'
import { getToken } from '../utils/localStorage'

export const useUserStore = create((set) => ({
    isLogin: getToken(),
    setIsLogin: (isLogin) => set(() => ({ isLogin }))
}))