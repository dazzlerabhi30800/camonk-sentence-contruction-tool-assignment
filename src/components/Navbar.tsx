import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center z-10 items-center py-[18px] bg-white shadow-md text-gray-1 ${
        location.pathname === "/questions" && "hidden"
      }`}
    >
      <p className="text-p2 font-medium">Sentence Construction</p>
      {/* Menu Btn */}
      <button className="absolute right-4 sm:right-10 md:right-20 text-xl top-1/2 -translate-y-1/2 hover:opacity-50">
        <i className="bi bi-three-dots-vertical"></i>
      </button>
    </nav>
  );
};

export default Navbar;
