import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in");
      console.log("User logged in");
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        alert(error.message);
      } else {
        alert("An unknown error occurred");
        console.log("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 ">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <label className="text-xs font-bold mb-4 " htmlFor="email">
        Email
      </label>
      <input
        className="mb-2 p-2 border border-yellow-300 rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="exemple@gmail.com"
      />
      <label className="text-xs font-bold mb-4 " htmlFor="">
        Password
      </label>
      <input
        className="mb-4 p-2 border border-yellow-300 rounded"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password ㊙️"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-yellow-300 rounded"
        onClick={handleLogin}
      >
        Send
      </button>
    </div>
  );
};

export default Login;
