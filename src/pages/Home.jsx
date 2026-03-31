import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="hero">

        <h1>1.8 млн товаров</h1>
        <p>Найди, сравни, выбери</p>

        <button onClick={() => nav("/catalog")}>
          Перейти в категории
        </button>

      </div>
    </div>
  );
}