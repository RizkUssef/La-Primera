// import { View, Text } from "react-native";
import React from "react";
import tic_one from "../../assets/images/tic 1.svg";
import tic_two from "../../assets/images/tic 2.svg";
import tic_three from "../../assets/images/tic 3.svg";

export default function Ticket() {
  return (
    <>
      <section className="langar-regular w-[85%] mx-auto py-10">
        <h1 className="text-[#946521] text-6xl mb-20 text-center">
          Buy Ticket
        </h1>
        <p className="text-black mb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <div className="flex justify-between items-center w-[75%] mx-auto mb-20">
            <div className="p-5 bg-white rounded-2xl shadow-[0px_5px_30px_rgba(148,101,33,0.4)] ">
                <img className="mb-5" src={tic_one} alt="no" />
                <h1 className="text-[rgb(148,101,33)] text-3xl text-center">Buy Single</h1>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-[0px_5px_30px_rgba(148,101,33,0.4)] ">
                <img className="mb-5" src={tic_two} alt="no" />
                <h1 className="text-[rgb(148,101,33)] text-3xl text-center">Buy Double</h1>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-[0px_5px_30px_rgba(148,101,33,0.4)] ">
                <img className="mb-5" src={tic_three} alt="no" />
                <h1 className="text-[rgb(148,101,33)] text-3xl text-center">Buy Group</h1>
            </div>
        </div>
        <p className="text-black mb-20 text-center">You can also purchase tickets from the following ticket agents: Loka Tickets, Ticket Sok, IUI Tickets, Hjtry Tickets, Songs VGT.</p>
      </section>
    </>
  );
}
