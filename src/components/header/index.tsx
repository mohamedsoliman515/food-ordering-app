import { Routes } from "@/constants/enums";
import Link from "../link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href={Routes.ROOT}>🍕 Pizza</Link>
      </div>
    </header>
  );
};

export default Header;
