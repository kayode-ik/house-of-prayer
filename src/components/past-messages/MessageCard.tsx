
import React from "react";
import Link from "next/link";

type MessageCardProps = {
  title: string;
  category: string;
  series?: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
};

const MessageCard: React.FC<MessageCardProps> = ({
  title,
  category,
  series,
  date,
  excerpt,
  image,
  slug,
}) => {
  return (
    <div className="message-card">
      {image && <img src={image} alt={title} className="message-image" />}

      <div className="message-content">
        <p className="message-category">
          {category} {series ? `| ${series}` : ""}
        </p>

        <h3 className="message-title">{title}</h3>

        <p className="message-date">Posted on {date}</p>

        <p className="message-excerpt">{excerpt}</p>

        <Link href={`/past-messages/${slug}`} className="message-link">
          Listen to the message →
        </Link>
      </div>
    </div>
  );
};

export default MessageCard;
