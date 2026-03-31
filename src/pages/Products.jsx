import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(r => r.json())
      .then(setProducts);
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Каталог</h2>

      <div className="grid">
        {filtered.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} />
            <h4>{p.title}</h4>
            <p>${p.price}</p>

            <Link to={`/products/${p.id}`}>
              <button className="btn-main">Подробнее</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}