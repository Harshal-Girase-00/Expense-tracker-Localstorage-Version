import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext , useState} from "react";

const Navbar = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
     logoutUser();
    navigate("/");
  }

  return (
    
    <div className="flex  md:justify-between h-20 w-full md:px-20 bg-white shadow-md items-center ">
      <button className="w-1/3  md:hidden text-3xl"  onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? "✖" : "☰"}</button>

      <div className="flex gap-2 items-center">
        <img src="/images/logo.png" alt="logo" className="w-16" />
        <p className="font-bold">EXPENSE TRACKER</p>
      </div>

      

      <ul className={`flex-col md:flex-row absolute md:static left-0 top-20  md:w-auto bg-white md:flex md:py-0 transition-all duration-300 ${menuOpen ? "flex" : "hidden md:flex" } md:items-center gap-2`}>
        <li className="md:border-r-2 border-black px-4 md:px-2 font-medium">
          <Link to="/">Home</Link>
        </li>

        <li className="md:border-r-2 border-black px-4  md:px-2 font-medium">
          <Link to="/about">About</Link>
        </li>

        <li className="md:border-r-2 border-black px-4 md:px-2 font-medium">
          <Link to="/contact">Contact</Link>
        </li>

        {!user && (
          <>
            <li className="md:border-r-2 border-black px-4 md:px-2 font-medium">
              <Link to="/login">Login</Link>
            </li>

            <li className="px-2 font-medium">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li className="md:border-r-2 border-black px-4 md:px-2 font-medium">
              <Link to="/add-transaction">Add Transaction</Link>
            </li>

            <li className="md:mr-4 px-4 md:px-2 font-medium">
              <Link to="/view-transactions">View Transactions</Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="md:px-4 mb-3 md:mb-0 ml-4 md:ml-0 md:py-2 md:bg-slate-700 text-red-500 md:text-white md:rounded-full font-medium"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
