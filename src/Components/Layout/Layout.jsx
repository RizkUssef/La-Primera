// import { View, Text } from "react-native";
import React from "react";
import Navbar from './../Navbar/Navbar';
// import { Outlet } from "react-router-dom";
import About from "../About/About";
import Main from './../Main/Main';
import Powerd from './../Powerd/Powerd';
import Media from './../Media/Media';
import Line from './../Line/Line';
import Ticket from './../Ticket/Ticket';
import Connect from './../Connect/Connect';
import Footer from './../Footer/Footer';
import Launch from './../Launch/Launch';

export default function Layout() {
  return <>
    <Navbar/>
    <Main/>
    <About/>
    <Powerd/>
    <Media/>
    <Line/>
    <Launch/>
    <Ticket/>
    <Connect/>
    <Footer/>
  </>;
}
