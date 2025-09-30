type ButtonProps = {
  children?: React.ReactNode | React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "transparent";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    type = "button",
    onClick,
    disabled,
  } = props;
  const base =
    "rounded-xl font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#0088FF] text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
    transparent: "bg-transparent text-gray-300"
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
