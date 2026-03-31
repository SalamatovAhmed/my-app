import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  return (
    <div className="form">
      <h2>Вход</h2>
      <input onChange={e => setEmail(e.target.value)} />
      <button onClick={() => { login(email); nav("/profile"); }}>
        Войти
      </button>
    </div>
  );
}