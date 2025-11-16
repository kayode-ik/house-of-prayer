"use client";
import React from "react";
import { useParams } from "next/navigation";
// import PostHero from "../components/PostHero";
// import PostContent from "../components/PostContent";
// import SimilarPosts from "../components/SimilarPosts";
// import CommentForm from "../components/CommentForm";
import "@/styles/singleMessage.css";
import PostHero from "./components/PostHero";
import PostContent from "./components/PostContent";
import SimilarPosts from "./components/SimilarPosts";
import CommentForm from "./components/CommentForm";

// Mock data — in real case, you'd fetch from API or file
const mockMessages = [
  {
    slug: "having-faith-when-life-is-hard",
    title: "Having Faith when life is Hard",
    category: "Hope for Tomorrow",
    date: "August 30, 2021",
    image: "/images/messages/faith.jpg",
    author: "John Doe",
    audio: "/audios/faith.mp3",
    content: `
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Sed arcu non odio euismod lacinia. Sit amet cursus sit amet dictum sit amet justo.</p>
      <p>Viverra aliquet eget sit amet. Arcu dui vivamus arcu felis bibendum ut.</p>
    `,
    takeaways: [
      "Remain Top of Mind",
      "Be Seen to Sell",
      "Learn Something New",
    ],
    similar: [
      {
        title: "Don't Give Up",
        date: "April 4, 2021",
        image: "/images/messages/dont-give-up.jpg",
        slug: "dont-give-up",
      },
      {
        title: "What is Worship",
        date: "April 4, 2021",
        image: "/images/messages/worship.jpg",
        slug: "what-is-worship",
      },
      {
        title: "Reset Your Perspective",
        date: "April 4, 2021",
        image: "/images/messages/reset.jpg",
        slug: "reset-your-perspective",
      },
    ],
  },
];

const SingleMessagePage = () => {
  const { slug } = useParams();
  const post = mockMessages.find((msg) => msg.slug === slug);

  if (!post) return <p>Message not found.</p>;

  return (
    <section className="single-message">
      <PostHero title={post.title} category={post.category} date={post.date} image={post.image} />
      <PostContent post={post} />
      <SimilarPosts posts={post.similar} />
      <CommentForm />
    </section>
  );
};

export default SingleMessagePage;
