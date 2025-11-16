import React from "react";

type PostContentProps = {
  post: {
    author: string;
    audio: string;
    content: string;
    takeaways: string[];
    image: string;
  };
};

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="post-content container">
      <div className="intro-section">
        <div className="intro-text">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <audio controls src={post.audio}></audio>
        </div>
        <div className="intro-image">
          <img src={post.image} alt="Post visual" />
        </div>
      </div>

      <div className="main-body">
        <p>
          Sed arcu non odio euismod lacinia. Sit amet cursus sit amet dictum sit amet justo. 
          Nunc pulvinar sapien et ligula ullamcorper. Pellentesque diam volutpat commodo sed egestas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <blockquote className="post-quote">
        “Viverra aliquet eget sit amet. Arcu dui vivamus arcu felis bibendum ut.”
        <span className="author">– {post.author}</span>
      </blockquote>

      <div className="key-takeaways">
        <h2>Key Takeaways</h2>
        <ul>
          {post.takeaways.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostContent;
