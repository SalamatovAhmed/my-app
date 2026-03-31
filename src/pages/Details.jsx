import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchItem } from "../services/api/api";

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItem(id)
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-20">Загрузка...</div>;
  if (!item) return <div className="text-center py-20">Товар не найден</div>;

  return (
    <div className="container mx-auto px-10 py-20">
      <Link to="/list" className="text-red-500 font-bold mb-10 inline-block">← Назад к списку</Link>
      <div className="flex gap-10 bg-white p-10 rounded-[40px] shadow-lg">
        <img src={item.thumbnail} alt={item.title} className="w-1/3 rounded-2xl object-cover" />
        <div>
          <h2 className="text-4xl font-black uppercase mb-4">{item.title}</h2>
          <p className="text-3xl font-black text-red-500 mb-6">${item.price}</p>
          <p className="text-gray-500 text-lg mb-8">{item.description}</p>
          <button className="bg-black text-white px-10 py-4 rounded-2xl font-bold uppercase hover:bg-red-500 transition-all">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}