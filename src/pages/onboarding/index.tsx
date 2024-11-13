import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FirstStep from "@/components/FirstStep";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Кастомна подія для перегляду сторінки статистики
    window.gtag("event", "page_view", {
      page_title: "Onboarding Page",
      page_path: "/onboarding",
      subject: "Welcome to Follow Stats!",
      body: "<p>Дякуємо, що приєдналися до нас!</p>",
      template_id: "welcome_template",
    });
  }, []);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple">
      {step === 1 && <FirstStep />}
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
        className="bg-purple mt-4 p-2 text-white rounded-lg absolute z-50 bottom-52 w-80"
        disabled={loading}
      >
        {loading ? "Loading...🧻" : step < 3 ? <p className=""> Great</p> : "Finish"}
      </button>
    </div>
  );
};

export default Onboarding;
