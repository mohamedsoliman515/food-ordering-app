import { Routes } from "@/constants/enums";
import Link from "../link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="md:py-6 py-4">
      <div className="container flex items-center justify-between">
        <Link
          href={Routes.ROOT}
          className="text-primary font-semibold text-2xl"
        >
          🍕 Pizza
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
