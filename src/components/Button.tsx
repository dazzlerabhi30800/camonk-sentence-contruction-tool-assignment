import { twMerge } from "tailwind-merge";
interface buttonProps {
  variant: "outline" | "default";
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
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
      className={twMerge(
        "px-4 py-2 rounded border-1 hover:opacity-70 transition duration-300 linear",
        variant === "outline"
          ? " text-primary-blue border-primary-blue bg-transparent"
          : "text-white  border-transparent bg-primary-blue",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
