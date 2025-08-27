export default function Card({ title, onClick, children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px", marginBottom: "10px" }}>
      <h3>{title}</h3>
      <div>{children}</div>
      <button onClick={onClick}>Hacé click</button>
    </div>
  );
}

