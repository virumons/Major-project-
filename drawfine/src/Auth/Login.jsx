import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setError(null); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
      // Navigate to Dashboard and pass email as state
      navigate("/dashboard", { state: { email: inputs.email } });
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <label className="mb-12">
        <h1 className="text-black text-2xl mb-1">Login, Welcome back 👋</h1>
        <h2 className="text-[#919191]">
          Please login with credentials and resume your work.
        </h2>
      </label>

      <div className="">
        <label className="flex flex-row items-start">
          <input
            type="email"
            id="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            size="48"
            placeholder="E-mail"
            className="bg-[#ebebeb] p-[15px] my-[8px] rounded-xl"
          />
        </label>

        <label className="flex flex-row items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={inputs.password}
            onChange={(e) =>
              setInputs({ ...inputs, password: e.target.value })
            }
            size="48"
            placeholder="Connect Password"
            className="bg-[#ebebeb] text-[20px] p-[15px] my-[8px] rounded-xl"
          />
          <button
            className="bg-black text-white px-4 py-2 ml-2 rounded-xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </label>

        <div className="flex flex-row justify-end items-center">
          <label>
            <h1 className="text-[#919191]">Forgot Password?</h1>
          </label>
        </div>
      </div>

      {error && <h1 className="text-[#e56565]">{error}</h1>}

      <div>
        <button
          onClick={handleLogin}
          className="bg-[#A74D9B] py-2 px-52 rounded-xl text-black font-medium mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
