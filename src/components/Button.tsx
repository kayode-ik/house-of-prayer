import React from "react";
import Link from "next/link";
import "@/styles/button.css";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
};

export default Button;
