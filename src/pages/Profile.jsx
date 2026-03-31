import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile">
      <h2>Профиль</h2>
      <p>{user?.email}</p>
    </div>
  );
}