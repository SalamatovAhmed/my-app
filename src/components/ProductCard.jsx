export default function ProductCard({ product }) {

  const buy = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Добавлено в корзину");
  };

  const fav = () => {
    const f = JSON.parse(localStorage.getItem("fav")) || [];
    f.push(product);
    localStorage.setItem("fav", JSON.stringify(f));
    alert("Добавлено в избранное");
  };

  return (
    <div className="card">

      <img src={product.thumbnail} />

      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <div className="actions">
        <button onClick={fav}>❤️</button>
        <button onClick={buy}>Купить</button>
      </div>

    </div>
  );
}