const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-[18px] bg-white shadow-md relative text-gray-1">
      <p className="text-p2 font-medium">Sentence Construction</p>
      {/* Menu Btn */}
      <button className="absolute right-4 sm:right-10 md:right-20 text-xl top-1/2 -translate-y-1/2 hover:opacity-50">
        <i className="bi bi-three-dots-vertical"></i>
      </button>
    </nav>
  );
};

export default Navbar;
