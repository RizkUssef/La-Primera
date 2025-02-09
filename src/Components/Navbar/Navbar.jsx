// import { View, Text } from 'react-native';
import React from 'react';
import logo from "../../../public/la primera.svg";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <nav className='fixed left-0 right-0 px-24 py-3 z-[999999] flex justify-between items-center'>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul className='flex justify-center items-center gap-7 text-xl text-white langar-regular'>
            <li><NavLink to="about" target="">About</NavLink></li>
            <li><NavLink href="#" target="">Media</NavLink></li>
            <li><NavLink href="#" target="">Line up</NavLink></li>
            <li><NavLink href="#" target="">Tickets</NavLink></li>
            <li><NavLink href="#" target="">Connect</NavLink></li>
          </ul>
        </nav>
    </>
  )
}