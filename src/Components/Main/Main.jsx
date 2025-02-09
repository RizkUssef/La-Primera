import React from "react";
import bg from "../../assets/images/main-bg.jpg";

export default function Main() {
  return (
    <>
      <section className="h-screen relative langar-regular text-white">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div className={`h-full bg-cover bg-center`} style={{ backgroundImage: `url(${bg})` }}>
          <div className="absolute top-60 left-25">
            <h1 className="text-8xl mb-8">La Primera</h1>
            <p className="text-xl mb-12">Saturday June 28th at Bvrty Club</p>
            <a className="text-xl py-2 px-10 border-[1px] border-white rounded-2xl mr-10" href="">Buy Ticket</a>
            <a className="text-xl py-2 px-10 border-[1px] border-white rounded-2xl" href="">About</a>
          </div>
        </div>
      </section>
    </>
  );
}
