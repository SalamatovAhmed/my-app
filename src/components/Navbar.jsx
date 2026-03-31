import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="nav">
      <h2>Shop</h2>

      <div>
        <Link to="/">Главная</Link>
        <Link to="/products">Каталог</Link>
        <Link to="/favorites">Избранные</Link>

        {user ? (
          <>
            <Link to="/profile">Профиль</Link>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
}