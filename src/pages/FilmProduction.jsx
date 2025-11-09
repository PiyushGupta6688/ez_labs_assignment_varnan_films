import React from "react";
import BGImg from "../assets/BGImg.png";
import Film1 from "../assets/film1.png"; 
import Service1 from "../assets/Service1.svg"; 
import Back from "../assets/Back.png"; 
import Camera1 from "../assets/Camera 01.svg"; 
import Camera2 from "../assets/Camera 02.svg";
import Camera3 from "../assets/Camera 03.svg";
import Camera4 from "../assets/Camera 04.svg"; 
import Arrow from "../assets/arrow.svg"; 
import NavbarImg from "../assets/Navbar.png";
import Frame from "../assets/Frame.png";
import { useNavigate } from "react-router-dom";
export default function FilmProduction() {
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
        alt="Back Button"
        style={{
          position: "absolute",
          width: "6%",
          minWidth: "100px",
          top: "13%",
          left: "10%",
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={() => navigate("/service")} 
      />

      {/* Heading */}
      <h1
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Halant, serif",
          fontWeight: 400,
          fontSize: "2vw",
          textAlign: "center",
          color: "#000",
          width: "60%",
          lineHeight: 1.2,
        }}
      >
        "Filmmaking is a chance to live many lifetimes." – Robert Altman
      </h1>

      {/* Underline image */}
      <img
        src={Service1}
        alt="Underline"
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "auto",
        }}
      />

      {/* Left-side image */}
      <img
        src={Film1}
        alt="Film Side"
        style={{
          position: "absolute",
          left: "15%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "25%",
          height: "auto",
        }}
      />

      {/* Right-side text */}
      <p
        style={{
          position: "absolute",
          right: "30%",
          top: "25%",
          width: "25%",
          fontFamily: "Instrument Sans, sans-serif",
          fontWeight: 400,
          fontSize: "1vw",
          lineHeight: "1.6vw",
          color: "#000",
        }}
      >
        Who says films are just an escape? <br />
        We see them as a way to live many lives – to feel, to explore, and to tell stories that stay. <br />
        And with each film, we carry new memories and new reasons to keep creating. <br /><br />
        <strong>V crafts:</strong> <br />
        • Documentaries <br />
        • Corporate Videos <br />
        • 2D Animation Videos <br />
        • 3D Animation Videos
      </p>

      {/* Explore Now + Arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontFamily: "Instrument Sans, sans-serif",
            fontSize: "1vw",
            color: "#000",
          }}
        >
          Explore Now
        </span>
        <img src={Arrow} alt="Arrow" style={{ width: "3vw", height: "auto" }} />
      </div>

      {/* Right-side camera images */}
      <img src={Camera1} alt="Camera 1" style={{ position: "absolute", width: "6%", top: "15%", right: "10%" }} />
      <img src={Camera2} alt="Camera 2" style={{ position: "absolute", width: "5%", top: "60%", right: "12%" }} />
      <img src={Camera3} alt="Camera 3" style={{ position: "absolute", width: "6%", top: "45%", right: "25%" }} />

      {/* Bottom-left camera */}
      <img src={Camera4} alt="Camera 4" style={{ position: "absolute", width: "6%", bottom: "5%", left: "5%" }} />
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
