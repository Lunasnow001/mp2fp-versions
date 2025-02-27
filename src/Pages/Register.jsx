import { useState } from "react";
import { Link } from "react-router-dom";
import LogoMp2 from "../assets/MP.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", { name, email, password });
  };

  return (
    <div className="flex mx-auto container">
      <div className="flex-col justify-center items-center p-8 md:p-12 w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm p-8 border rounded-lg w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <h2 className="font-medium text-xl">
              Welcome {">"} <span className="text-orange-400">MP</span> 2FP
            </h2>
          </div>
          <h2 className="mb-6 font-bold text-2xl text-center">
            Join us as one!✌
          </h2>
          <p className="mb-6 text-center">
            Enter your username and password to login
          </p>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-sm">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-sm">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-sm">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 p-2 rounded-lg w-full font-semibold text-white transition"
          >
            Sign Up
          </button>
          <p className="mt-6 text-sm text-center">
            Don&apos;t have an account?
            <Link to="/login" className="text-blue-500">
              {" "}
              Log In
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block bg-gray-400 w-1/2">
        {/* <div className="flex flex-col justify-center items-center h-full">
          <img
            src={LogoMp2}
            alt="Login to Account"
            className="hover:bg-white shadow-lg border w-full h-[750px] object-cover hover:-translate-y-1 active:translate-y-0 duration-300"
          />
        </div> */}
        <div className="flex md:flex-row flex-col items-center gap-6 md:gap-8 p-7 rounded-2xl">
          <div>
            <img
              src={LogoMp2}
              alt="Login to Account"
              className="hover:bg-white shadow-lg border w-full h-[750px] object-cover hover:-translate-y-1 active:translate-y-0 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
