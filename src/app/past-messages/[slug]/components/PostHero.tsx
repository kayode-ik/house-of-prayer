import React from "react";

type PostHeroProps = {
  title: string;
  category: string;
  date: string;
  image: string;
};

const PostHero: React.FC<PostHeroProps> = ({ title, category, date, image }) => {
  return (
    <div className="post-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <div className="hero-text">
          <p className="post-category">{category}</p>
          <h1>{title}</h1>
          <p className="post-date">Posted on {date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostHero;
