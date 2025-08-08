
import "@fortawesome/fontawesome-free/css/all.min.css";


import ItemFeedback from "../../components/ItemFeedback"

import "./Feedback.css";

function Feedback() {
  

  return (
    <div>
      <main>

        <section className="feedback-section">
        <h2>FeedBack</h2>

        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
        <ItemFeedback
          author="João Silva"
          comment="As empadas são incríveis! Recomendo a de frango."
        />
      </section>

      </main>
    </div>
  );
}

export default Feedback;
