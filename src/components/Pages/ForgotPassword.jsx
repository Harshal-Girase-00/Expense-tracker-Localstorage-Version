import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setErrors(["No registered user found."]);
      return;
    }

    if (username !== savedUser.username) {
      newErrors.push("Invalid credentials");
    }

    if (password !== confirmPassword) {
      newErrors.push("Passwords do not match.");
    }

    if (phone !== savedUser.phone) {
      newErrors.push("Invalid Mobile Number.");
    }

    if (email !== savedUser.email) {
      newErrors.push("Invalid Email.");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      savedUser.password = password;
      localStorage.setItem("user", JSON.stringify(savedUser));
      alert("Password has been Reset Successfully!");
      navigate("/login");
    }
  };

  return (
    <div className=" flex flex-1 min-h-screen  bg-gradient-to-r from-[#E0F2FE] to-[#DCFCE7] items-center justify-center sm:px-0 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-[29rem] sm:py-10 sm:px-10 px-2 py-10 border  rounded-2xl shadow-xl h-auto bg-gradient-to-l from-[#E0F2FE] to-[#DCFCE7] ] "
      >
        <h1 className="text-3xl text-[#000000] mb-8 font-bold">
          Reset Your Password
        </h1>
        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full mx-auto my-4">
            <strong className="font-bold">Errors:</strong>
            <ul className="list-disc list-inside">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value), setErrors([]);
          }}
          className="h-12 pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
          placeholder="Enter Register Number"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value), setErrors([]);
          }}
          className="h-12 pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
          placeholder="Enter Register Email"
          required
        />
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value), setErrors([]);
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
            setPassword(e.target.value), setErrors([]);
          }}
          className="h-12  pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
          placeholder="Create New Password"
          required
        />
        <input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value), setErrors([]);
          }}
          className="h-12  pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
          placeholder="Confirm New Password"
          required
        />
        <button className="h-12 rounded-lg  hover:bg-[#081e5a] bg-[#1E3A8A] text-white  text-center font-semibold w-[93%] mb-4">
          Reset Password
        </button>
        <p className="text-md text-slate-900 w-[93%]">
          Back to{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Login
          </Link>{" "}
          {"/"}{" "}
          <Link to="/" className="text-blue-700 font-semibold hover:underline">
            Home
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
