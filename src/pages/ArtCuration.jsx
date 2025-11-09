import React from "react";
import BGImg from "../assets/BGImg.png";
import ArtFrame from "../assets/ArtFrame.png"; 
import Service1 from "../assets/Service1.svg"; 
import Back from "../assets/Back.png"; 
import Art2 from "../assets/Art2.svg"; 
import Art4 from "../assets/Art4.svg";
import Art3 from "../assets/Art3.svg";
import Art1 from "../assets/Art1.svg"; 
import Arrow from "../assets/arrow.svg"; 
import NavbarImg from "../assets/Navbar.png";
import Frame from "../assets/Frame.png";
import { useNavigate } from "react-router-dom";     

export default function ArtProduction() {
  
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
        alt="Back Button"
        className="absolute z-20 cursor-pointer"
        style={{ top: "13%", left: "10%", width: "6%", minWidth: "100px" }}
        onClick={() => navigate("/service")} 
      />

      {/* Heading */}
      <h1
        className="absolute text-center z-20"
        style={{
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Halant, serif",
          fontWeight: 400,
          fontSize: "2.3vw",
          lineHeight: 1.2,
          color: "#000",
          width: "60%",
        }}
        
      >
        "V take art where it belongs, to the people.” - Vernita Verma
      </h1>

      {/* Underline */}
      <img
        src={Service1}
        alt="Underline"
        className="absolute z-10"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "auto",
        }}
      />

      {/* Left-side image */}
      <img
        src={ArtFrame}
        alt="Art Side"
        className="absolute z-10"
        style={{
          left: "15%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "25%",
          height: "auto",
        }}
      />

      {/* Right-side text */}
      <p
        className="absolute text-black z-20"
        style={{
          right: "25%",
          top: "25%",
          width: "30%",
          fontFamily: "Instrument Sans, sans-serif",
          fontWeight: 400,
          fontSize: "1.5vw",
          lineHeight: "2vw",
        }}
      >
        Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong. Through every festival, every performance, and every gathering, we help stories find their stage and their people. <br /><br />
        <strong>V curates:</strong> <br />
        • Art Festivals <br />
        • Live Performances <br />
        • Community Events <br />
        • Cultural Storytelling
      </p>

      {/* Explore Now + Arrow */}
      <div
        className="absolute flex items-center gap-2 z-20"
        style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)" }}
      >
        <span style={{ fontSize: "1.5vw", fontFamily: "Instrument Sans, sans-serif", color: "#000" }}>
          Explore Now
        </span>
        <img src={Arrow} alt="Arrow" style={{ width: "3vw", height: "auto" }} />
      </div>

      {/* Right-side art images */}
      <img src={Art2} alt="Art 2" style={{ position: "absolute", width: "6%", top: "15%", right: "10%" }} />
      <img src={Art4} alt="Art 4" style={{ position: "absolute", width: "5%", top: "60%", right: "12%" }} />
      <img src={Art3} alt="Art 3" style={{ position: "absolute", width: "6%", top: "45%", right: "25%" }} />

      {/* Bottom-left art image */}
      <img src={Art1} alt="Art 1" style={{ position: "absolute", width: "6%", bottom: "5%", left: "5%" }} />
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
