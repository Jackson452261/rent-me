import create from 'zustand';
import { setFavorites, getFavorites } from '@/utils/localStorage';
import { getProducts } from "@/utils/localStorage"

const useFavoriteStore = create((set) => ({
  favorites: getFavorites(),
  addFavorite: (productId) => set((state) => {
    const addProduct = getProducts().find(product => product.id === productId)
    console.log(addProduct);
    // 存資料庫
    setFavorites([...state.favorites, addProduct]);
    // 渲染畫面
    return { favorites: [...state.favorites, addProduct] };
  }),
  removeFavorite: (productId) => set((state) => {
    const updatedFavorites = state.favorites.filter((product) => product.id !== productId);
    // 存資料庫
    setFavorites(updatedFavorites);
    // 渲染畫面
    return { favorites: updatedFavorites };
  }),
}));

export default useFavoriteStore;

