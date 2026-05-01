import CompletionMessage from "./CompletionMessage";

function ChallengeCard({ challenge, done, onDone }) {
  return (
    <section className={`challenge-card ${done ? "done" : ""}`}>
      <span className="small-label">{challenge.category}</span>

      <h2>Today's Challenge</h2>

      <h3>{challenge.title}</h3>

      <p>{challenge.description}</p>

      {!done ? (
        <button onClick={onDone}>Mark as Done</button>
      ) : (
        <CompletionMessage />
      )}
    </section>
  );
}

export default ChallengeCard;
