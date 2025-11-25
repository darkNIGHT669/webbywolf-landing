import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  onClick,
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200";

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8]",
    outline: "border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",
    white: "bg-white text-[#2563EB] hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && <ArrowRight size={size === "sm" ? 16 : size === "md" ? 18 : 20} />}
    </button>
  );
};

export default Button;