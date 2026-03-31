import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <h2>Загрузка...</h2>;

  // fake аналитика
  const data = [
    { name: "Янв", price: product.price - 20 },
    { name: "Фев", price: product.price - 10 },
    { name: "Мар", price: product.price },
    { name: "Апр", price: product.price + 10 },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} width="300" />
      <p>{product.description}</p>
      <h2>${product.price}</h2>

      <h3>📊 Аналитика цены</h3>

      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="price" stroke="red" />
      </LineChart>
    </div>
  );
}