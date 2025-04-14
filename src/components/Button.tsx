import { twMerge } from "tailwind-merge";
interface buttonProps {
  variant: "outline" | "default";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  variant = "default",
  children,
  className,
  onClick,
  disabled,
}: buttonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "px-4 py-2 rounded border-1 hover:opacity-70 transition duration-300 linear disabled:cursor-not-allowed disabled:opacity-40",
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
