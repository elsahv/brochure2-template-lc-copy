// import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 w-full z-50 mb-5">
      <nav className="flex justify-between p-4 w-full text-2xl">
        <a href="/" className="font-bold">
          Laughing Coyote Dev
        </a>
        <div className="flex">
          <a href="/#about" className="px-3 md:block hidden">
            about
          </a>
          <a href="/#fish-" className="px-3 md:block hidden">
            Services
          </a>
        </div>
        <button className="py-2 px-5 text-white bg-black md:block hidden">
          <a href="/#contact">Contact</a>
        </button>
        {/* <Hamburger /> */}
      </nav>
    </header>
  );
};

export default Header;
