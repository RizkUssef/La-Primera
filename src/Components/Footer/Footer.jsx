// import { View, Text } from "react-native";
import React from "react";
import logo from "../../../public/la primera.svg";

export default function Footer() {
  return (
    <>
      <footer className="py-3 langar-regular shadow-[0px_5px_30px_rgba(148,101,33,0.4)]">
        <div className="w-[85%] mx-auto flex justify-between items-center">
          <img src={logo} alt="logo" />
          <p className="text-[#946521] text-xl">
            Note Parties is haram PROOOOOO it’s just Event project so don’t go
            to any party
          </p>
        </div>
      </footer>
    </>
  );
}
