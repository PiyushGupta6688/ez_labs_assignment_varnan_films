import React from "react";
import BGImg from "../assets/BGImg.png";
import BrandingFrame from "../assets/BrandingFrame.png"; 
import Service1 from "../assets/Service1.svg"; 
import Back from "../assets/Back.png"; 
import Branding2 from "../assets/Branding2.svg";
import Branding4 from "../assets/Branding4.svg";
import Branding3 from "../assets/Branding3.svg";
import Branding1 from "../assets/Branding1.svg"; 
import Arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";
import NavbarImg from "../assets/Navbar.png";
import Frame from "../assets/Frame.png";


export default function Branding() {
  const navigate = useNavigate();
  return (
    <div
    className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-start"
    style={{
      backgroundImage: `url(${BGImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div/ >
{/* Navbar background image */}
<img
  src={NavbarImg}
  alt="Navbar"
  className="w-full h-auto z-10"
/>

{/* Company logo */}
<img
  src={Frame}
  alt="V Films Logo"
  className="absolute top-[15px] left-[40px] company-logo z-20"
/>
      {/* Top-left Back button */}
      <img
        src={Back}
        alt="Back"
        className="absolute z-20 cursor-pointer"
        style={{  position: "absolute",
        width: "6%",
        minWidth: "100px",
        top: "13%",
        left: "10%",
        cursor: "pointer",
        zIndex: 10, }}
        onClick={() => navigate("/service")} 
      />

      {/* Heading */}
      <h1
        className="absolute text-center text-black font-serif z-20"
        style={{
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          fontSize: "2vw",
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        A brand is a voice, and a product is a souvenir." - Lisa Gansky
      </h1>

      {/* Underline */}
      <img
        src={Service1}
        alt="Underline"
        className="absolute z-20"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "auto",
        }}
      />

      {/* Left Image */}
      <img
        src={BrandingFrame}
        alt="Branding Frame"
        className="absolute z-10"
        style={{
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "25%",
          height: "auto",
        }}
      />

      {/* Right Text */}
      <p
        className="absolute text-black z-20"
        style={{
          right: "30%",
          top: "30%",
          width: "32%",
          fontFamily: "Instrument Sans, sans-serif",
          fontSize: "1.5vw",
          lineHeight: "1.6vw",
        }}
      >
        A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust. <br />
        We shape brands that people remember, return to, and fall in love with. <br /><br />
        <strong>V creates:</strong> <br />
        • Branding & Communication <br />
        • Market Mapping <br />
        • Content Management <br />
        • Social Media Management <br />
        • Rebranding
      </p>

      {/* Explore Now + Arrow */}
      <div
        className="absolute flex items-center gap-2 z-20"
        style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
      >
        <span className="text-black" style={{ fontSize: "1vw", fontFamily: "Instrument Sans, sans-serif" }}>
          Explore Now
        </span>
        <img src={Arrow} alt="Arrow" style={{ width: "3vw", height: "auto" }} />
      </div>

      {/* Right Branding Decorations */}
      <img src={Branding2} alt="Branding 2" className="absolute" style={{ width: "6%", top: "15%", right: "10%" }} />
      <img src={Branding4} alt="Branding 4" className="absolute" style={{ width: "5%", top: "60%", right: "12%" }} />
      <img src={Branding3} alt="Branding 3" className="absolute" style={{ width: "6%", top: "45%", right: "25%" }} />

      {/* Bottom-left Branding Image */}
      <img src={Branding1} alt="Branding 1" className="absolute" style={{ width: "6%", bottom: "5%", left: "5%" }} />
      {/* Footer Scroll Bar */}
  <div
        className="absolute bottom-[30px] left-[65px] rounded-[6px] animate-scrollbar"
        style={{
          width: "200px",
          height: "12px",
          background: "#FDD0C1",
          zIndex: 40,
          left: "410px", // change this value to move it horizontally
        }}
      ></div> 
    </div>
  );
}
