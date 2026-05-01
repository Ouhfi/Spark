function HistoryItem({ item }) {
  return (
    <div className="history-item">
      <span className="check">✓</span>

      <div>
        <h4>{item.title}</h4>
        <p>
          {item.category} · {item.date}
        </p>
      </div>
    </div>
  );
}

export default HistoryItem;
