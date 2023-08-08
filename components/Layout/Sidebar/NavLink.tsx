import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  to: string;
  label: string;
  isPro?: boolean;
  Icon?: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<Props> = ({ to, label, isPro, Icon, onClick }) => {
  const pathName = usePathname();
  const isActive = pathName.split("/")[1] == to.split("/")[1];

  return (
    <Link
      href={to}
      className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-500 hover:text-white dark:hover:bg-gray-700 ${
        isActive
          ? "text-white bg-gray-900 dark:bg-gray-900"
          : "text-gray-900 dark:text-white"
      }`}
      onClick={onClick}
    >
      {Icon}
      <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      {isPro && (
        <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
          Pro
        </span>
      )}
    </Link>
  );
};

export default NavLink;
