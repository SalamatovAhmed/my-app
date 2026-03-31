export default function Search({ setSearch }) {
  return (
    <input
      placeholder="Поиск..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}