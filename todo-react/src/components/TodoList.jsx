export default function TodoList({ items, onToggle, onDelete }) {
  if (items.length === 0) {
    return <p className="empty">No tasks yet — add one!</p>;
  }

  return (
    <ul className="list">
      {items.map(item => (
        <li key={item.id} className={item.done ? "done" : ""}>
          <label>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => onToggle(item.id)}
            />
            <span>{item.text}</span>
          </label>
          <button className="delete" onClick={() => onDelete(item.id)}>
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}
