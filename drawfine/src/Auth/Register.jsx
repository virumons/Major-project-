import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      const userDoc = doc(db, "users", userCredential.user.email);
      await setDoc(userDoc, {
        email: userCredential.user.email,
        createdAt: new Date(),
      });

      setSuccess("User registered successfully!");
      navigate("/dashboard", { state: { email: userCredential.user.email } });
    } catch (err) {
      setError(err.message); // Display error if registration fails
    }
  };

  return (
    <div className="register-container">
      <label>
        <h1 className="text-black mb-1">Register, Join With us 👋</h1>
        <h2 className="text-[#919191]">Register and set up the environment.</h2>
      </label>

      <div className="w-[100%] flex flex-col justify-center items-center">
        <label className="flex flex-row items-start">
          <input
            type="email"
            size="45"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-[#ebebeb] p-[15px] text-[16px] text-black my-[8px] rounded-lg"
          />
        </label>

        <label className="flex flex-row items-start">
          <input
            type="password"
            size="45"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-[#ebebeb] p-[15px] text-[16px] my-[8px] text-black rounded-lg"
          />
        </label>
      </div>

      {error && <h1 className="text-[#e56565]">{error}</h1>}
      {success && <h1 className="text-[#65e57c]">{success}</h1>}

      <div>
        <button
          onClick={handleSignIn}
          className="bg-[#A74D9B] py-2 px-32 rounded-xl text-black font-medium mt-4">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
