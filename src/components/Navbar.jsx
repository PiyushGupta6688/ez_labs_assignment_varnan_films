import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-white p-4 flex justify-start gap-6 shadow-md">
      <Link to="/" className="text-black hover:underline">
        Home
      </Link>
      <Link to="/about" className="text-black hover:underline">
        About Team
      </Link>
      
      <Link to="/aboutUs" className="text-black hover:underline">
        About Us
      </Link>
      <Link to="/contact" className="text-black hover:underline">
        Contact
      </Link>
      <Link to="/service" className="text-black hover:underline">
        Service
      </Link>
    </div>
  );
};

export default Navbar;
