// import { View, Text } from "react-native";
import React from "react";
import Navbar from './../Navbar/Navbar';
import { Outlet } from "react-router-dom";
import About from "../About/About";
import Main from './../Main/Main';
import Powerd from './../Powerd/Powerd';

export default function Layout() {
  return <>
    <Navbar/>
    {/* <Outlet/> */}
    <Main/>
    <About/>
    <Powerd/>
  </>;
}
