import React from "react";
import Link from "next/link";

type SimilarPostsProps = {
  posts: { title: string; date: string; image: string; slug: string }[];
};

const SimilarPosts: React.FC<SimilarPostsProps> = ({ posts }) => {
  return (
    <section className="similar-posts">
      <h2>Similar Posts</h2>
      <div className="similar-grid">
        {posts.map((p) => (
          <div className="similar-card" key={p.slug}>
            <img src={p.image} alt={p.title} />
            <div className="similar-info">
              <h3>{p.title}</h3>
              <p>Posted on {p.date}</p>
              <Link href={`/past-messages/${p.slug}`}>Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarPosts;
