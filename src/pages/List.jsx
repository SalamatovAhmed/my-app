import { useEffect, useState } from "react";
import { fetchItems } from "../services/api/api";
import { Link } from "react-router-dom";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems()
      .then(setData)
      .catch(() => setError("Ошибка при загрузке данных"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20 font-bold">Загрузка товаров...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-10 py-10">
      <h2 className="text-3xl font-black uppercase mb-8">Каталог товаров</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 12).map(item => (
          <div key={item.id} className="border p-6 rounded-[30px] shadow-sm hover:shadow-md transition-all">
            <h3 className="font-bold text-lg mb-4 truncate">{item.title}</h3>
            <Link 
              to={`/details/${item.id}`} 
              className="inline-block bg-black text-white px-6 py-2 rounded-xl text-xs font-bold uppercase"
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}