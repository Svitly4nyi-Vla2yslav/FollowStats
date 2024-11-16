import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FirstStep from "@/components/FirstStep";
import SecondStep from "@/components/SecondStep";
import ThirdStep from "@/components/ThirdStep";

import Vector6 from "../../assets/1.svg";
import Vector7 from "../../assets/Vector6.svg";


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
    if (step < 4) {
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
    <div
      className="flex flex-col items-center justify-end
     min-h-screen bg-purple"
    >
      {step === 1 && <FirstStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
      {step === 4 && (
        <div className=" flex max-w-[425px] mx-auto space-x-2 justify-center 
        ">
          <Vector6
            className="absolute top-32 "
            // data-aos="fade-up"
            // data-aos-delay="300"
          />
          <Vector7
            className="absolute top-32  w-full h-full -z-10"
            // data-aos="fade-up"
            // data-aos-delay="300"
          />
          <div
            className="bg-light-gray rounded-t-2xl flex 
        items-center flex-col mx-0
      justify-start pt-10 h-[55vh] z-10 max-w-[425px] w-full"
            // data-aos="fade-up"
            // data-aos-easing="linear"
          >
            <h2
              className="text-4xl text-center font-bold
           text-black w-2/3"
            >
              Your unfollowers
            </h2>
            <p
              className="text-sm mt-5 text-center font-regular 
          font-outfit text-black w-screen pb-7"
            >
              Enter your Instagram username to get full data analysis
            </p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 border text-xs border-blue-500 
            rounded-lg w-80 p-4"
              placeholder="@Instagram username"
            />
          </div>
        </div>
      )}
      <button
        onClick={nextStep}
        className={`bg-purple p-4 text-white rounded-lg absolute 
          z-50 bottom-20 w-80 ${
            step === 4 && !username ? "bg-opacity-50 cursor-not-allowed" : ""
          }`}
        disabled={loading || (step === 4 && !username)}
      >
        {loading ? (
          "Loading...🧻"
        ) : step === 1 ? (
          <p className=""> Great</p>
        ) : step === 2 ? (
          <p className=""> Awesome</p>
        ) : step === 3 ? (
          "FINISH"
        ) : (
          "START ANALYSIS"
        )}
      </button>
    </div>
  );
};

export default Onboarding;
