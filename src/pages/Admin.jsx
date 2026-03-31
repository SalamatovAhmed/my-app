import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Admin() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.getProducts().then(data => setList(data.products));
  }, []);

  const del = (id) => {
    if (confirm('Delete?')) {
      api.deleteProduct(id).then(() => {
        setList(list.filter(item => item.id !== id));
        alert('Product Deleted');
      });
    }
  };

  return (
    <div className="bg-white p-6 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Admin Panel (Manage Items)</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-400">
            <th className="py-2">Title</th>
            <th className="py-2">Price</th>
            <th className="py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(i => (
            <tr key={i.id} className="border-b hover:bg-gray-50">
              <td className="py-3 font-medium">{i.title}</td>
              <td className="py-3 text-[#2DA5F3] font-bold">${i.price}</td>
              <td className="py-3 text-right">
                <button onClick={() => del(i.id)} className="text-red-500 font-bold hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}