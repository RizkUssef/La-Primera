import React from "react";
import Navbar from './../Navbar/Navbar';
import About from "../About/About";
import Main from './../Main/Main';
import Powerd from './../Powerd/Powerd';
import Media from './../Media/Media';
import Line from './../Line/Line';
import Ticket from './../Ticket/Ticket';
import Connect from './../Connect/Connect';
import Footer from './../Footer/Footer';
import Launch from './../Launch/Launch';
import Top from './../Top/Top';


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
    <Top/>
    <Connect/>
    <Footer/>
  </>;
}
