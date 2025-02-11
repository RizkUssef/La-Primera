// import { View, Text } from "react-native";
import React from "react";
import photo_one from "../../assets/images/photo 1.jpeg";
import photo_two from "../../assets/images/photo 2.jpeg";
import photo_three from "../../assets/images/photo 3.jpg";
import photo_four from "../../assets/images/photo 4.jpg";
import photo_five from "../../assets/images/photo 5.jpg";
import photo_six from "../../assets/images/photo 6.jpeg";
import photo_seven from "../../assets/images/photo 7.jpeg";
import photo_eight from "../../assets/images/photo 8.jpeg";
import photo_nine from "../../assets/images/photo 9.jpeg";
// import photo_ten from "../../assets/images/photo 1";

export default function Media() {
  return <>
        <section id="media" className="mb-20">
        <h1 className="text-[#946521] text-6xl mb-20 langar-regular text-center">Media</h1>
            <div className="columns-2 mt-5 [&>img]:mb-5 [&>img]:rounded-2xl lg:columns-3 xl:columns-4 w-[85%] mx-auto ">
            <img src={photo_one} alt="" />
            <img src={photo_two} alt="" />
            <img src={photo_three} alt="" />
            <img src={photo_four} alt="" />
            <img src={photo_five} alt="" />
            <img src={photo_six} alt="" />
            <img src={photo_seven} alt="" />
            <img src={photo_eight} alt="" />
            <img src={photo_nine} alt="" />
            </div>
        </section>
  </>;
}
