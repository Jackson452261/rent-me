import create from 'zustand';
import { setFavorites, getFavorites } from '@/utils/localStorage';

const useFavoriteStore = create((set) => ({
  favorites: getFavorites(),
  addFavorite: (product) => set((state) => {
    const updatedFavorites = [...state.favorites, product];
    setFavorites(updatedFavorites);
    return { favorites: updatedFavorites };
  }),
  removeFavorite: (productId) => set((state) => {
    const updatedFavorites = state.favorites.filter((product) => product.id !== productId);
    setFavorites(updatedFavorites);
    return { favorites: updatedFavorites };
  }),
}));

export default useFavoriteStore;

