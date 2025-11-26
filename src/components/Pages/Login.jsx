import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("users")) || [];

    const user = savedUser.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return setError("Invalid username or password");
    }

    loginUser(user.username);

    navigate("/");
  };

  return (
    <div className=" flex flex-1 min-h-screen  bg-gradient-to-r from-blue-200 to-green-200 items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-[27rem] p-10 border rounded-2xl shadow-xl h-auto bg-gradient-to-l from-[#E0F2FE] to-[#DCFCE7]"
      >
        <h1 className="text-3xl text-[#000000] mb-8 font-bold">
          Login Account
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 w-[93%] text-center">
            {error}
          </div>
        )}

        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          className="h-12 pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          className="h-12  pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
          placeholder="Password"
          required
        />
        <button className="h-12 rounded-lg  hover:bg-[#081e5a] bg-[#1E3A8A] text-white  text-center font-semibold w-[93%] mb-4">
          Login
        </button>
        <div className="flex justify-between w-[93%]">
          <Link
            to="/register"
            className="text-blue-700 font-semiblod hover:underline "
          >
            Create Account?
          </Link>
          <Link
            to="/forgot-password"
            className="text-blue-700 font-semiblod hover:underline "
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
