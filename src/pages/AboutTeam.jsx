import React from "react";
import "../css/AboutTeam.css";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BGImg.png";
import NavbarImg from "../assets/Navbar.png";
import Frame from "../assets/Frame.png";
import Group9Img from "../assets/Group_9.png";
import Group2Img from "../assets/Group2.png";
import FilmMakers from "../assets/FilmMakers.png";
import VectorFilmMaker from "../assets/VectorFilmMaker.png";
import ArtCurators from "../assets/ArtCurators.png";
import VectorArt from "../assets/VectorArt.png";
import IndiaGate from "../assets/IndiaGate.png";
import BrandingExperts from "../assets/BrandingExperts.png";
import VectorBrand from "../assets/VectorBrand.png"
import TextAT from "../assets/TextAT.png";

const AboutTeam = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/portfolio"); // ✅ your route
  };

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
      <div >
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
    </div>
        {/* Decorative Group 9 Image */}
        <img
          src={Group9Img}
          alt="Decorative Group 9"
          className="group9-image"
        />

   <img
        src={Group2Img}
        alt="New Decorative"
        className="group2-image"
      />
         <img
        src={FilmMakers}
        alt="New Decorative"
        className="FilmMaker"
      />
    
          <img
          src={VectorFilmMaker}
          alt="New Decorative"
          className="VectorFilmMaker"
        />

      <img 
      src={ArtCurators}
      alt="New Decorative"
      className="ArtCurators"
      />
      <img 
      src={VectorArt}
      alt="New Decorative"
      className="VectorArt"
      />
     
     <img 
      src={IndiaGate}
      alt="New Decorative"
      className="IndiaGate"
      />
        <img 
      src={BrandingExperts}
      alt="New Decorative"
      className="BrandingExperts"
      />
      
      <img 
      src={VectorBrand}
      alt="New Decorative"
      className="VectorBrand"
      />
     <img 
      src={TextAT}
      alt="New Decorative"
      className="TextAT"
      />
  <button
      type="button"
      onClick={handleRedirect}
      style={{
        background: "rgba(241, 93, 43, 1)",
        color: "white",
        fontSize: "12px",
        padding: "8px 20px",
        borderRadius: "16px",
        cursor: "pointer",
        textAlign: "center",
        fontWeight: 500,
        display: "inline-block",
        position: "absolute",
        top: "620px",
        left: "980px",
      }}
    >
      View Portfolio
    </button>


     
  {/* Footer Scroll Bar */}
  <div
        className="absolute bottom-[30px] left-[65px] rounded-[6px] animate-scrollbar"
        style={{
          width: "200px",
          height: "12px",
          background: "#FDD0C1",
          zIndex: 40,
          left: "210px", // change this value to move it horizontally
        }}
      ></div> 
</div>
  );
};

export default AboutTeam;
