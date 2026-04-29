import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",
  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-zinc-700 dark:hover:bg-zinc-600",
  outline:
    "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium
        focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-950
        transition-colors duration-200
        ${variantStyles[variant]}
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
};

export default Button;
