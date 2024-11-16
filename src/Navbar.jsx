import Logo from './assets/images/favicon.svg'

const Navbar = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "App", href: "#" },
    { name: "Account", href: "#" },
    { name: "Export", href: "#" },
  ];

  const navLinks = links.map(link =><li key={link.name}><a>{link.name}</a></li>)
  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
        <div>
          <img src={Logo} className="h-14" />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-4 text-gray-500 font-medium">
            {navLinks}
          </ul>
        </div>
        <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
          Get App
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
