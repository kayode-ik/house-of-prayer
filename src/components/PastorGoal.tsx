import React from "react";
import { Quote } from "lucide-react";
import "@/styles/pastorgoal.css";
import type { PastorGoalContent } from "@/types/content";

interface Props {
  content: PastorGoalContent;
}

const PastorGoal = ({ content }: Props) => {
  return (
    <section className="pastor-goal-section">
      <div className="overlay" />
      <div className="goal-container">
        {/* LEFT — photo */}
        <div className="goal-image">
          <div className="quote-mark">
            <Quote size={36} color="#E8722A" />
          </div>
          <img src={content?.image} alt={content.name} />
          <div className="pastor-info">
            <h4>{content.name}</h4>
            <p>{content.title}</p>
          </div>
        </div>

        {/* RIGHT — quote & body */}
        <div className="goal-text">
          <h2 style={{ fontSize: "2rem" }}>{content.quote}</h2>
          <p>{content.body1}</p>
          <p>{content.body2}</p>
        </div>
      </div>
    </section>
  );
};

export default PastorGoal;
