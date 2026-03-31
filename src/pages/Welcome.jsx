import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) setUserName(data.name);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <div className="bg-white p-16 rounded-[50px] shadow-xl border border-gray-50">
        <span className="text-7xl block mb-6">👋</span>
        <h1 className="text-5xl font-black uppercase mb-4">Добро пожаловать, <span className="text-red-500">{userName}</span>!</h1>
        <p className="text-gray-400 mb-10 text-lg font-medium">Ваш личный профиль Behoof готов к работе.</p>
        <Link to="/" className="bg-black text-white px-12 py-5 rounded-2xl font-bold uppercase hover:bg-red-500 transition-all shadow-lg">Перейти к покупкам</Link>
      </div>
    </div>
  );
}