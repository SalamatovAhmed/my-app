import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AuthProvider from "./context/AuthContext";
import { HashRouter } from "react-router-dom";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Header />

        <Routes>
          <HashRouter></HashRouter>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}