export default function Modal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ background: "#fff", padding: 20 }}>
        <p>Are you sure?</p>

        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}