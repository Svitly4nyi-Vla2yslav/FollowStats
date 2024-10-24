import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const nextStep = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/1`
        );
        console.log("user data:", response.data);
        router.push("/");
      } catch (error) {
        console.error("Error fetching user data :", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {step === 1 && (
        <p className="text-4xl text-center font-bold text-blue-600">
          Welcome to FollowStats
        </p>
      )}
      {step === 2 && (
        <p className="text-4xl  text-center font-bold text-blue-600">
          Learn more about us!
        </p>
      )}
      {step === 3 && (
        <div className="flex flex-col items-center text-3xl  text-center font-bold text-blue-600">
          <p>Enter your Instagram username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 p-2 border text-xs border-blue-500 rounded-lg"
            placeholder="Instagram username"
          />
        </div>
      )}
      <button
        onClick={nextStep}
        className="bg-yellow-400 mt-4 p-2 text-white rounded-lg "
        disabled={loading}
      >
        {loading ? "Loading...🧻" : step < 3 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default Onboarding;
