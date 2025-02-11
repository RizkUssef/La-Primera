import React from "react";
import "@fortawesome/fontawesome-free";
import { Link} from "react-scroll";

export default function Top() {
    
  return (
    <>
      <section className="fixed bottom-[70px] right-[50px]">
        <Link
          to="main"
          smooth={true}
          duration={1000}
          className="cursor-pointer p-[15px] bg-white rounded-full shadow-[0px_5px_30px_rgba(148,101,33,0.4)]"
        >
          <i class="fa-solid fa-arrow-up w-[25px] h-[25px] text-center"></i>
        </Link>
      </section>
    </>
  );
}
