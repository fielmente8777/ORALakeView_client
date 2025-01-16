import Link from "next/link";
interface ButtonProps {
  href: string;
  label: string;
  className?: string;
  newTabe?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  href,
  label,
  className = "",
  newTabe = false,
}) => {
  return (
    <Link
      href={href}
      target={newTabe ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`text-white bg-primary text-base py-2 px-4 flex items-center justify-center description1 rounded-sm font-medium hover:bg-primary/80 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out ${className}`}
    >
      {label}
    </Link>
  );
};

export default Button;
