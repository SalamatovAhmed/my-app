import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Card({ item }) {
  const { toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="card">
      <img src={item.thumbnail} />
      <h4>{item.title}</h4>
      <p>${item.price}</p>

      <button onClick={() => toggleFavorite(item)}>
        ❤️ В избранное
      </button>

      <Link to={`/products/${item.id}`}>
        <button>Подробнее</button>
      </Link>
    </div>
  );
}