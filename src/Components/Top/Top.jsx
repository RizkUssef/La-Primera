import React, {useState , useEffect} from "react";
import "@fortawesome/fontawesome-free";
import { Link } from "react-scroll";

export default function Top() {
      const [goUp , setGoUp] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrolledHeight = window.scrollY;
          const viewportHeight = window.innerHeight;
          // console.log(scrolledHeight,viewportHeight)
          if (scrolledHeight >= viewportHeight) {
            setGoUp(true);
            // setScrolled(true);
          } else {
            setGoUp(false);
            // setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      },[])
  return (
    <>
      <section className="bottom-[70px] right-[50px] transition-opacity duration-1000 ease-in-out" style={goUp ? {position : "fixed"} : {display: "none"}}>
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
