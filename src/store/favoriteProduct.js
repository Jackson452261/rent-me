import create from 'zustand';
import { setFavorites, getFavorites } from '@/utils/localStorage';
import { getProducts } from "@/utils/localStorage"

const useFavoriteStore = create((set) => ({
  favorites: getFavorites(),
  addFavorite: (productId) => set((state) => {
    const addProduct = getProducts().find(product => product.id === productId)
    setFavorites([...state.favorites, addProduct]);
    return { favorites: [...state.favorites, addProduct] };
  }),
  removeFavorite: (productId) => set((state) => {
    const updatedFavorites = state.favorites.filter((product) => product.id !== productId);
    setFavorites(updatedFavorites);
    return { favorites: updatedFavorites };
  }),
}));

export default useFavoriteStore;

