interface buttonProps {
  variant: "outline" | "default";
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  variant = "default",
  children,
  width,
  height,
  className,
  onClick,
}: buttonProps) => {
  return (
    <button
      style={{ width: width ?? 140, height: height ?? 42 }}
      onClick={onClick}
      className={`rounded-lg text-p3  ${
        variant === "outline"
          ? "border-1 text-primary-blue border-primary-blue bg-transparent"
          : "border-1 text-white  border-transparent bg-primary-blue"
      } hover:opacity-70 transition duration-300 linear !${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
