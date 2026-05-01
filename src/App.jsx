import { useEffect, useState } from "react";
import "./App.css";
import { challenges } from "./data/challenges";

import ChallengeCard from "./components/ChallengeCard";
import StreakTracker from "./components/StreakTracker";
import HistoryList from "./components/HistoryList";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [completed, setCompleted] = useState(() => {
    return JSON.parse(localStorage.getItem("spark-history")) || [];
  });

  const [filter, setFilter] = useState("Tous");

  const today = new Date().toISOString().split("T")[0];

  const challengeIndex = new Date().getDate() % challenges.length;
  const todayChallenge = challenges[challengeIndex];

  const alreadyDone = completed.some((item) => item.date === today);

  useEffect(() => {
    localStorage.setItem("spark-history", JSON.stringify(completed));
  }, [completed]);

  function markAsDone() {
    if (alreadyDone) return;

    const newItem = {
      ...todayChallenge,
      date: today,
    };

    setCompleted([newItem, ...completed]);
  }

  const filteredHistory =
    filter === "Tous"
      ? completed
      : completed.filter((item) => item.category === filter);

  return (
    <main className="app">
      <header className="top-bar">
        <div className="icon">☀</div>
        <h1>Spark</h1>
        <div className="streak-number">{completed.length}</div>
      </header>

      <ChallengeCard
        challenge={todayChallenge}
        done={alreadyDone}
        onDone={markAsDone}
      />

      <StreakTracker completed={completed} />

      <CategoryFilter filter={filter} setFilter={setFilter} />

      <HistoryList history={filteredHistory} />
    </main>
  );
}

export default App;
