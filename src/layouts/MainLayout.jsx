import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="header">
        <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <Link to="/">Shop</Link>
            <Link to="/products">Каталог</Link>
            <Link to="/favorites">Избранные</Link>
          </div>

          <div>
            <Link to="/profile">Профиль</Link>
          </div>
        </div>
      </div>

      {children}
    </>
  );
} 