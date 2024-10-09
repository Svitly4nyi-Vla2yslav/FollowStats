import React, { useState } from "react";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  {step === 1 && <p>Welcome to FollowStats</p>}
  {step === 2 && <p>Learn more about us!</p>}
  {step === 3 && <p>Enter your Instagram username</p>}
  <button
    onClick={nextStep}
    className="mt-4 p-2 bg-blue-500 text-white rounded"
  >
    Next
  </button>
</div>
};

export default Onboarding;
