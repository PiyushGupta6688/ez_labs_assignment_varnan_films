import React from "react";
import "../css/AboutUs.css";
import BGImg from "../assets/BGImg.png";
import Box1 from "../assets/Frame1.png";
import Box2 from "../assets/Frame2.png";
import Box3 from "../assets/Frame3.png";
import AboutUs1 from "../assets/AboutUs1.png";
import AboutUs2 from "../assets/AboutUs2.png";
import Frame from "../assets/Frame.png";

export default function AboutUs() {
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
      {/* ✅ Company logo */}
      <img
        src={Frame}
        alt="V Films Logo"
        className="absolute top-[15px] left-[40px] company-logo z-20"
      />

      {/* ✅ Top Section */}
      <div className="aboutus-top w-full flex justify-between px-16 mt-32">
        <div className="left-side max-w-[600px] ">
          <h1 className="left-side-text">
            A montage of familiar faces and names.
          </h1>
          <p className="aboutus-para">
            Some stories come from the biggest names. Others begin with bold, rising voices.
            We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
          </p>
        </div>

        <div className="right-side max-w-[600px]">
          <p className="top-right-text">
            Every project is more than just a brief — it’s a new chapter waiting to be written. <br />
            Together, we've crafted tales that inspire, connect, and endure.
          </p>
        </div>
      </div>

      {/* ✅ AboutUs images */}
      <div className="aboutus1-image-container">
        <img src={AboutUs1} alt="About Us 1" className="aboutus1-image" />
        <img src={AboutUs2} alt="About Us 2" className="aboutus2-image" />
      </div>

      {/* ✅ Frames */}
      <div className="about-container">
        <img src={Box1} alt="Box 1" className="frame1" />
        <img src={Box2} alt="Box 2" className="frame2" />
        <img src={Box3} alt="Box 3" className="frame3" />
      </div>
      {/* Footer Scroll Bar */}
  <div
        className="absolute bottom-[30px] left-[65px] rounded-[6px] animate-scrollbar"
        style={{
          width: "200px",
          height: "12px",
          background: "#FDD0C1",
          zIndex: 40,
          left: "350px", // change this value to move it horizontally
        }}
      ></div> 
    </div>
    
  );
}
