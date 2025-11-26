import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    if (!firstName) newErrors.push("First name is required");
    if (!lastName) newErrors.push("Last name is required");

    if (!phone) {
      newErrors.push("Mobile number is required");
    } else if (phone.length !== 10) {
      newErrors.push("Enter a valid 10-digit mobile number");
    }

    if (!email) {
      newErrors.push("Email is required");
    }

    if (!username) newErrors.push("Username is required");
    if (!password) newErrors.push("Password is required");

    if (password !== confirmPassword) {
      newErrors.push("Confirm password must match");
    }

    setErrors(newErrors);

    const savedUser = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = savedUser.some((u) => {
      console.log(u);
      return u.username === username || u.email === email;
    });

    console.log(userExists);

    if (userExists) {
      return setErrors(["This useraname or email already exists"]);
    }

    if (newErrors.length > 0) return;

    const userData = {
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
    };

    const updateUsers = [...savedUser, userData];

    localStorage.setItem("users", JSON.stringify(updateUsers));

    alert("Registration Successful! Please Login to Continue.");

    navigate("/login");
  };
  return (
    <>
      <div className=" flex flex-1 min-h-screen  bg-gradient-to-r from-blue-200 to-green-200 items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-[30rem] p-10 border rounded-2xl shadow-xl h-auto bg-gradient-to-l from-[#E0F2FE] to-[#DCFCE7]"
        >
          <h1 className="text-3xl text-[#000000] mb-8 font-bold">
            Create Account
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
          <div className="flex  items-center justify-center gap-4 w-full rounded-lg  mb-4">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-[45%] h-12  rounded-lg  bg-white/70  pl-2 "
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-12 w-[45%]  rounded-lg  bg-white/70  pl-2 "
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-12 pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
            placeholder="Enter Your Number"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
            placeholder="Enter Your email"
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12  pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12  pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
            placeholder="Create Password"
          />
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-12  pl-4 rounded-lg  bg-white/70  w-[93%] mb-4"
            placeholder="Confirm Password"
          />
          <button className="h-12 rounded-lg hover:bg-[#081e5a] bg-[#1E3A8A] text-white  text-center font-semibold w-[93%] mb-4">
            Register
          </button>
          <p className="text-md text-slate-900">
            Already have an Account?{" "}
            <Link
              to="/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
