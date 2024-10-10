import { useRouter } from "next/router";
import React, { useState } from "react";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/");
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
        <p className="text-4xl  text-center font-bold text-blue-600">
          Enter your Instagram username
        </p>
      )}
      <button
        onClick={nextStep}
        className="bg-yellow-400 mt-4 p-2 text-white rounded-lg "
      >
        {step < 3 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default Onboarding;
