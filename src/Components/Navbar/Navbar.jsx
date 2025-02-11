import React, { useRef } from "react";
import logo from "../../../public/la primera.svg";
import { Link } from "react-scroll";

export default function Navbar() {

  return (
    <>
      <nav className="fixed left-0 right-0 px-24 py-3 z-[999999] flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex justify-center items-center gap-7 text-xl text-white langar-regular">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="media"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              to="line"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Line up
            </Link>
          </li>
          <li>
            <Link
              to="launch"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Launching In
            </Link>
          </li>
          <li>
            <Link
              to="ticket"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              to="connect"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Connect
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
