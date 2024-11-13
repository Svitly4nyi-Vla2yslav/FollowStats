import React from "react";
import Group from "../assets/Group.svg";
import Group8 from "../assets/Group8.svg";
import Vector5 from "../assets/Vector5.svg";
import Vector6 from "../assets/Vector6.svg";

const FirstStep: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-end h-full bg-purple mx-auto">
      <div className="flex justify-center w-full" data-aos="fade-up">
        <div className="flex max-w-[425px] mx-auto space-x-2 justify-center overflow-hidden">
          <Group className=" -z-20 " data-aos="zoom-in" data-aos-delay="100" />
          <Group8
            className="relative -z-10"
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <Vector5
            className="absolute -z-30"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Vector6
            className="absolute w-full -z-30"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </div>
      <div className="flex items-center flex-col justify-end h-screen max-w-[425px] mx-auto">
        <div
          className="bg-light-gray rounded-t-2xl flex items-center flex-col mx-0
        justify-center h-full z-10 max-w-[425px]"
          data-aos="fade-up"
          data-aos-easing="linear"
        >
          <h2 className="text-4xl text-center font-bold text-black w-2/3">
            Who likes you
          </h2>
          <p className="text-sm mt-5 text-center font-regular font-outfit text-black w-2/3">
            Professional app to bring account analytics and reporting for
            instagram
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
