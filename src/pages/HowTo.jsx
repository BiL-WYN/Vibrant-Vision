import "./HowTo.css";
import NavBar from "../components/NavBar";

export default function HowTo() {
  return (
    <div>
      <NavBar />
      <main className="howto">
      
      <h1 className="howto__title">How to Use Vibrant Vision</h1>

      <section className="howto__section">
        <h2 className="howto__heading">Step 1: Vision Check-In</h2>
        <p className="howto__text">
          Start by completing a quick vision check-in. This helps personalize
          your experience and understand how your eyes are feeling today. Take
          extra note to reflect on how you feel during long sessions.
        </p>
      </section>

      <section className="howto__section">
        <h2 className="howto__heading">Step 2: Guided Eye Exercises</h2>
        <p className="howto__text">
          Follow short, guided eye exercises designed to reduce eye strain and
          improve focus. Each exercise only takes a few minutes.
        </p>
      </section>

      <section className="howto__section">
        <h2 className="howto__heading">Step 3: Track Your Progress</h2>
        <p className="howto__text">
          Check in daily to track your progress and build healthy eye-care
          habits over time!
        </p>
      </section>
    </main>
    </div>
    
  );
}


