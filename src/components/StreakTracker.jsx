function StreakTracker({ completed }) {
  const last7Days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return date.toISOString().split("T")[0];
  });

  return (
    <section className="streak-card">
      <h2>Scroll History</h2>

      <div className="circles">
        {last7Days.map((day) => {
          const isDone = completed.some((item) => item.date === day);

          return (
            <span
              key={day}
              className={`circle ${isDone ? "filled" : ""}`}
            >
              {isDone ? "✓" : ""}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default StreakTracker;
