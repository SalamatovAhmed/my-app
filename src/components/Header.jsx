import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const { user, logout } = useAuth();

  return (
    <div className="header">

      <h2 onClick={() => nav("/")}>Market</h2>

      <input
        placeholder="Поиск..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <button onClick={() => nav(`/catalog?q=${q}`)}>🔍</button>

      <button onClick={() => nav("/catalog")}>Каталог</button>

      {user ? (
        <>
          <button onClick={() => nav("/profile")}>👤</button>
          <button onClick={logout}>Выйти</button>
        </>
      ) : (
        <>
          <button onClick={() => nav("/login")}>Войти</button>
          <button onClick={() => nav("/register")}>Регистрация</button>
        </>
      )}

    </div>
  );
}