// import { View, Text } from "react-native";
import React from "react";

export default function Launch() {
  return (
    <>
      <section id="launch" className="langar-regular my-10 py-10">
        <h1 className="text-[#946521] text-6xl mb-20 text-center">
          Launching In
        </h1>
        <div className="[&>h1]:text-6xl [&>p]:self-end text-[#946521] w-1/2 flex justify-between items-center mx-auto p-20 shadow-[0px_5px_30px_rgba(148,101,33,0.4)] rounded-2xl ">
            <h1>15</h1>
            <p>Days</p>
            <h1>: 24 </h1>
            <p>Hours</p>
            <h1>: 45</h1>
            <p>Minutes</p>
            <h1>: 50</h1>
            <p>seconds</p>
        </div>
      </section>
    </>
  );
}
