import HistoryItem from "./HistoryItem";

function HistoryList({ history }) {
  return (
    <section className="history-list">
      {history.length === 0 ? (
        <p className="empty">No completed challenges yet.</p>
      ) : (
        history.map((item) => <HistoryItem key={item.date} item={item} />)
      )}
    </section>
  );
}

export default HistoryList;
