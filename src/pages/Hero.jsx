import React from "react";
import "../css/Hero.css";

import NavbarImg from "../assets/Navbar.png";
import HeroMandala from "../assets/HeroMandala.png";
import VFilmsLogo from "../assets/vfilms_logo.png";
import HomeImg from "../assets/HomeImg.png";
import BGImg from "../assets/BGImg.png";
import Frame from "../assets/Frame.png";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
          <div >
  {/* Navbar background image */}
  <img
    src={NavbarImg}
    alt="Navbar"
    className="w-full h-auto z-10"
  />

  
</div>
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-texture opacity-70 z-10"></div>

      {/* Left Side: Mandala + V Films Logo */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          width: "565px",
          height: "565px",
          top: "50%",
          left: "50px",
          transform: "translateY(-50%)",
          zIndex: 20,
        }}
      >
        {/* Mandala behind */}
        <img
          src={HeroMandala}
          alt="Mandala Background"
          className="absolute w-full h-full object-contain"
          style={{
            zIndex: 10,
            opacity: 0.3,
            filter:
              "brightness(40%) sepia(100%) hue-rotate(-20deg) saturate(500%)",
          }}
        />

        {/* V Films Logo above */}
        <img
          src={VFilmsLogo}
          alt="V Films Logo"
          className="relative w-[400px] h-auto"
          style={{ zIndex: 50 }}
        />
      </div>

      {/* Right Side: Tagline + Home Image  */}
      <div
        className="absolute right-side-text"
        style={{
          top: "30%",
          right: "150px",
          transform: "translateY(-50%)",
          zIndex: 30,
          textAlign: "right",
        }}
      >
        <div className="relative">
        <h1 className="tagline">
          Varnan is where stories<br /> find their voice and form
        </h1>

        {/* Home image just below tagline */}
        <img
          src={HomeImg}
          alt="Home"
          className="home-image"
        />

      </div>
      <div>
        
        {/* Paragraph below Home Image */}
        <p

  style={{
    width: "480px",                        
    height: "auto",                         
    fontFamily: "'Instrument Sans', sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0%",
    textAlign: "center",
    color: "rgba(37, 39, 41, 1)",
    background: "rgba(37, 39, 41, 0)",
    overflow: "hidden",
    position: "absolute",  // important for top/left
    top: "400px",          // distance from top of container/page
    left: "120px"          // distance from left of container/page
  }}
>

  Since 2009, V’ve been telling stories - stories of people, their journeys,
  and the places that shape them. Some begin in polished boardrooms, others
  in humble village squares. But every story starts the same way - by
  listening with intention. V believes it takes trust, patience, and an eye
  for the unseen to capture what truly matters. V doesn’t just tell stories -
  V honors them.
</p>


      </div>
      </div>
      {/* Footer Scroll Bar */}
      <div
        className="absolute bottom-[30px] left-[45px] rounded-[6px] animate-scrollbar"
        style={{
          width: "200px",
          height: "12px",
          background: "#FDD0C1",
          zIndex: 40,
        }}
      ></div>
    </div>
  );
}