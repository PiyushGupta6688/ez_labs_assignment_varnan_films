import React from "react";
import { useNavigate } from "react-router-dom";
import BGImg from "../assets/BGImg.png";
import Service1 from "../assets/Service1.svg";
import Service3 from "../assets/Service3.svg";
import ServiceFrame1 from "../assets/ServiceFrame1.png";
import ServiceFrame2 from "../assets/ServiceFrame2.png";
import ServiceFrame3 from "../assets/ServiceFrame3.png";

import NavbarImg from "../assets/Navbar.png";
import Frame from "../assets/Frame.png";

export default function Services() {
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
      {/* Title line */}
      <p style={styles.text}>
        The storyboard reveals the breadth of our craft.
      </p>

      {/* Underline image */}
      <img src={Service1} alt="Underline" style={styles.underlineImage} />

      {/* Frames in the middle */} {/* Frames */}
      <img
        src={ServiceFrame1}
        alt="Service Frame 1"
        style={{ ...styles.frame1, cursor: "pointer" }}
        onClick={() => navigate("/filmProd")}
      />
      <img
        src={ServiceFrame2}
        alt="Service Frame 2"
        style={{ ...styles.frame2, cursor: "pointer" }}
        onClick={() => navigate("/branding")}
      />
      <img
        src={ServiceFrame3}
        alt="Service Frame 3"
        style={{ ...styles.frame3, cursor: "pointer" }}
        onClick={() => navigate("/art")}
      />

      {/* Bottom image */}
      <img src={Service3} alt="Bottom Decoration" style={styles.bottomImage} />
    </div>
  );
}

// ✅ Inline CSS styles
const styles = {
  container: {
    width: "100vw",               // full width of viewport
    height: "100vh",              // full height of viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",           // prevent scrollbars
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  text: {
    position: "absolute",
    top: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",                 // auto-scale width
    maxWidth: "750px",
    fontFamily: "Halant, serif",
    fontWeight: 400,
    fontSize: "30px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#000",
    opacity: 1,
  },

  underlineImage: {
    position: "absolute",
    top: "145px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",                 // responsive width
    maxWidth: "880px",
    height: "auto",
    opacity: 1,
  },

  // ✅ Frames - keep your exact positions
  frame1: {
    position: "absolute",
    width: "380px",
    height: "450px",
    top: "180px",
    left: "220px",
    transform: "rotate(5deg)",
    transformOrigin: "top left",
    opacity: 1,
    zIndex: 3,
  },

  frame2: {
    position: "absolute",
    width: "360px",
    height: "420px",
    top: "250px",
    left: "550px",
    transform: "rotate(0deg)",
    opacity: 1,
    zIndex: 2,
  },

  frame3: {
    position: "absolute",
    width: "380px",
    height: "450px",
    top: "180px",
    left: "880px",
    transform: "rotate(-6deg)",
    transformOrigin: "top right",
    opacity: 1,
    zIndex: 1,
  },

  // ✅ Bottom image (full width)
  bottomImage: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100vw",
    height: "auto",
    objectFit: "cover",
    opacity: 1,
    zIndex: 0,
  },
};
