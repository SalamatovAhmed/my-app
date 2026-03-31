import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Card from "../components/Card";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Избранные</h2>

      <div className="grid">
        {favorites.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}