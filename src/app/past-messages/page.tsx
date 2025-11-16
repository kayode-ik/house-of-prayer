"use client";
import React, { useState } from "react";
import "@/styles/pastMessages.css";
import MessageCard from "@/components/past-messages/MessageCard";
import Pagination from "@/components/past-messages/Pagination";

const PastMessages = () => {
  // Mock Data (later connect to API)
  const allMessages = [
    {
      title: "Renewing Your Mind",
      category: "Hope for Tomorrow",
      date: "September 6, 2021",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      image: "/images/messages/renew.jpg",
      slug: "renewing-your-mind",
    },
    {
      title: "Having Faith when Life is Hard",
      category: "Hope for Tomorrow",
      date: "August 30, 2021",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
      image: "/images/messages/faith.jpg",
      slug: "having-faith-when-life-is-hard",
    },
    {
      title: "The Hope of His Calling",
      category: "Hope for Tomorrow",
      date: "August 23, 2021",
      excerpt:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...",
      image: "/images/messages/hope.jpg",
      slug: "the-hope-of-his-calling",
    },
    // add more mock posts...
  ];

  // Pagination logic
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allMessages.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allMessages.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="past-messages-section">
      <div className="container">
        <h1 className="page-title">Past Messages</h1>

        <div className="messages-grid">
          {currentPosts.map((msg) => (
            <MessageCard key={msg.slug} {...msg} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default PastMessages;
