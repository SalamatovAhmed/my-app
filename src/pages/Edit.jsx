import { useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Item {id}</h2>
      <input placeholder="Title" />
      <button>Save</button>
    </div>
  );
}