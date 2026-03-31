import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    if (favorites.find((f) => f.id === item.id)) {
      setFavorites(favorites.filter((f) => f.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};