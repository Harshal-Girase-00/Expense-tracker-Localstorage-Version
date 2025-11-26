import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
     logoutUser();
    navigate("/");
  }

  return (
    <div className="flex justify-between h-20 w-full px-20 bg-white shadow-md items-center">
      <div className="flex gap-2 items-center">
        <img src="/images/logo.png" alt="logo" className="w-16" />
        <p className="font-bold">EXPENSE TRACKER</p>
      </div>

      <ul className="flex items-center gap-2">
        <li className="border-r-2 border-black px-2 font-medium">
          <Link to="/">Home</Link>
        </li>

        <li className="border-r-2 border-black px-2 font-medium">
          <Link to="/about">About</Link>
        </li>

        <li className="border-r-2 border-black px-2 font-medium">
          <Link to="/contact">Contact</Link>
        </li>

        {!user && (
          <>
            <li className="border-r-2 border-black px-2 font-medium">
              <Link to="/login">Login</Link>
            </li>

            <li className="px-2 font-medium">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li className="border-r-2 border-black px-2 font-medium">
              <Link to="/add-transaction">Add Transaction</Link>
            </li>

            <li className="mr-4 px-2 font-medium">
              <Link to="/view-transactions">View Transactions</Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-700 text-white rounded-full font-medium"
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
