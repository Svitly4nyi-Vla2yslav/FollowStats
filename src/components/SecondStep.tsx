import React, { useEffect } from "react";
import Group from "../assets/Frame3.svg";
import Group8 from "../assets/Group10.svg";
import Vector5 from "../assets/Vector5.svg";
import Vector6 from "../assets/Vector6.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondStep: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className="flex items-center flex-col justify-end h-full
     bg-purple mx-auto"
    >
      <div className="flex justify-center w-full" data-aos="fade-up">
        <div
          className="flex max-w-[425px] mx-auto space-x-2 justify-center 
        overflow-hidden"
        >
          <Group
            className="mt-5 -z-20 "
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <Group8
            className="relative -z-10 top-28 right-14"
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <Vector5
            className="absolute -left-2 -z-30"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Vector6
            className="absolute w-full h-full -left-2  -z-30"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </div>
      <div
        className="
      flex items-center flex-col justify-start 
      h-[55vh] max-w-[425px] mx-auto
      "
      >
       <div
          className="bg-light-gray rounded-t-2xl flex 
          items-center flex-col mx-0
        justify-start h-full z-10 max-w-[425px] pt-5"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <h2 className="text-4xl text-center font-bold
           text-black w-2/3">
          Your unfollowers
          </h2>
          <p
            className="text-sm mt-5 text-center font-regular 
          font-outfit text-black w-screen"
          >
            Reachability, engagement rate, countries, audience analysis and etc.
          </p>
          <div className="flex gap-2 mt-7 ">
            <p className="h-1 bg-black w-6"></p>{" "}
            <p className="h-1 bg-purple w-6"></p>{" "}
            <p className="h-1 bg-black w-6"></p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
