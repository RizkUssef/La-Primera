// import { View, Text } from 'react-native'
import React from "react";

export default function Connect() {
  return (
    <>
      <section className="langar-regular w-[85%] mx-auto py-10 mb-10">
        <h1 className="text-[#946521] text-6xl mb-20 text-center">Connect</h1>
        <form className="flex justify-center items-center flex-col gap-10" action="">
          <div className="flex justify-center items-center flex-col w-1/2 gap-3">
            <label className="text-xl self-start text-[#946521]" htmlFor="">
              Name
            </label>
            <input
              type="text"
              className="w-full shadow-[0px_5px_30px_rgba(148,101,33,0.4)] text-l p-3 rounded-2xl focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center flex-col w-1/2 gap-3">
            <label className="text-xl self-start text-[#946521]" htmlFor="">
              Email
            </label>
            <input
              type="email"
              className="w-full shadow-[0px_5px_30px_rgba(148,101,33,0.4)] text-l p-3 rounded-2xl focus:outline-none"
            />
          </div>
          <div className="flex justify-center items-center flex-col w-1/2 gap-3">
            <label className="text-xl self-start text-[#946521]" htmlFor="">
            Message
            </label>
            <textarea className="w-full shadow-[0px_5px_30px_rgba(148,101,33,0.4)] text-l p-3 rounded-2xl h-32 focus:outline-none" name="" id=""></textarea>
          </div>
          <button className="text-[#946521] px-10 py-2 text-xl shadow-[0px_5px_30px_rgba(148,101,33,0.4)] rounded-2xl" type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
