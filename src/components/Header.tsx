// import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="bg-teal border-b border-black fixed top-0 w-full z-50 pt-3 ">
      <nav className="flex justify-between py-4 pb-3 px-3 w-full text-2xl">
        <a href="/" className="font-bold text-parchment dropshadow-2xl text-3xl">
          Laughing Coyote Dev
        </a>
        <div className="flex pt-1">
          <a href="/#about" className="px-3 md:block hidden hover:text-orange-300">
            about
          </a>
          <a href="/#fish-" className="px-3 md:block hidden hover:text-orange-300">
            Services
          </a>
        </div>
        <button className="mb-3 py-1 px-3 text-white dropshadow-2xl bg-orange-500 md:block hidden border border-teal hover:border-parchment">
          <a href="/#contact">Contact</a>
        </button>
        {/* <Hamburger /> */}
      </nav>
    </header>
  );
};

export default Header;
