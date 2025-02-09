// import { View, Text } from "react-native";
import React from "react";
import comp_one from "../../assets/images/1.png";
import comp_two from "../../assets/images/2.png";
import comp_three from "../../assets/images/3.png";
import comp_four from "../../assets/images/4.png";
import comp_five from "../../assets/images/5.png";

export default function Powerd() {
  return (
    <>
      <section className="h-[50vh] w-[85%] mx-auto langar-regular">
        <h1 className="text-center text-[#946521] text-6xl mb-14">Powerd By</h1>
        <div className="flex justify-between items-center">
          <div className="one ">
            <div className="img">
              <img
                className="w-[60px]  rounded-2xl opacity-80"
                src={comp_one}
                alt="company"
              />
            </div>
            <div className="text-[#946521]">
              <h3 className="text-2xl mb-3">León</h3>
              <p>Full Pyui Company</p>
            </div>
          </div>
          <div className="one">
            <div className="img">
              <img
                className="w-[60px]  rounded-2xl opacity-80"
                src={comp_two}
                alt="company"
              />
            </div>
            <div className="text-[#946521]">
              <h3 className="text-2xl mb-3">Lobo</h3>
              <p>Full Pyui Company</p>
            </div>
          </div>
          <div className="one">
            <div className="img">
              <img
                className="w-[60px]  rounded-2xl opacity-80"
                src={comp_three}
                alt="company"
              />
            </div>
            <div className="text-[#946521]">
              <h3 className="text-2xl mb-3">Alas</h3>
              <p>Full Pyui Company</p>
            </div>
          </div>
          <div className="one">
            <div className="img">
              <img
                className="w-[60px]  rounded-2xl opacity-80"
                src={comp_four}
                alt="company"
              />
            </div>
            <div className="text-[#946521]">
              <h3 className="text-2xl mb-3">Oso</h3>
              <p>Full Pyui Company</p>
            </div>
          </div>
          <div className="one">
            <div className="img">
              <img
                className="w-[60px]  rounded-2xl opacity-80"
                src={comp_five}
                alt="company"
              />
            </div>
            <div className="text-[#946521]">
              <h3 className="text-2xl mb-3">Avestruz</h3>
              <p>Full Pyui Company</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
