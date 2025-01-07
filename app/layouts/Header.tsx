import { NavLink } from "react-router";

const navItems = [
  { to: "/features", label: "Features" },
  { to: "/login", label: "Login", isButton: true },
];

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-tight hover:text-gray-200"
        >
          TubeSearch
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems
            .filter((item) => !item.isButton)
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-200 font-semibold underline"
                    : "hover:text-gray-200 transition-colors duration-300"
                }
              >
                {item.label}
              </NavLink>
            ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          {navItems
            .filter((item) => item.isButton)
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "hidden md:inline-block bg-white text-blue-600 font-bold px-5 py-2 rounded-full shadow-lg"
                    : "hidden md:inline-block bg-gray-100 text-blue-600 font-bold px-5 py-2 rounded-full shadow-lg hover:bg-white transition-transform transform hover:scale-105"
                }
              >
                {item.label}
              </NavLink>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
