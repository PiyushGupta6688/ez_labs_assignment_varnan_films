import React from "react";
import BGImg from "../assets/BGImg.png";
import Video1 from "../assets/video1.svg"; 
import Video from "../assets/Video.png";   
import Video4 from "../assets/video4.png"; 
import Video5 from "../assets/video5.png"; 
import Video6 from "../assets/video6.png"; 
import Video7 from "../assets/video7.png"; 
import Video2 from "../assets/video2.png"; 
import Frame from "../assets/Frame.png";
import NavbarImg from "../assets/Navbar.png";
export default function Portfolio() {
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
    <div/>
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
      {/* ✅ Heading Image (center top) */}
      <img src={Video4} alt="Portfolio Heading" style={styles.headingImage} />

      {/* ✅ Left-side video/image */}
      <img src={Video1} alt="Portfolio Video Left" style={styles.leftVideo} />

      {/* ✅ Center main video/image */}
      <img src={Video} alt="Portfolio Center Video" style={styles.centerVideo} />

      {/* ✅ Decorative corner designs */}
      <img src={Video7} alt="Corner Top Right" style={styles.cornerTopRight} />
      <img src={Video5} alt="Corner Top Left" style={styles.cornerTopLeft} />
      <img src={Video7} alt="Corner BottomLeft" style={styles.cornerBottomLeft} />
      <img src={Video6} alt="Corner BottomRight" style={styles.cornerBottomRight} />

      {/* ✅ Bottom-right page corner design */}
      <img src={Video2} alt="Page Corner Bottom Right" style={styles.pageCornerBottomRight} />
      {/* Footer Scroll Bar */}
  <div
        className="absolute bottom-[30px] left-[65px] rounded-[6px] animate-scrollbar"
        style={{
          width: "200px",
          height: "12px",
          background: "#FDD0C1",
          zIndex: 40,
          left: "650px", // change this value to move it horizontally
        }}
      ></div> 
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  },

  headingImage: {
    position: "absolute",
    top: "50px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "400px",
    height: "auto",
    zIndex: 10,
  },

  leftVideo: {
    position: "absolute",
    left: "5%",
    top: "45%",
    transform: "translateY(-50%)",
    width: "200px",
    height: "auto",
    zIndex: 5,
  },

  centerVideo: {
    position: "absolute",
    left: "50%",
    top: "55%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "auto",
    zIndex: 6,
  },

  cornerTopLeft: {
    position: "absolute",
    top: "280px",
    left: "1040px",
    width: "60px",
    height: "auto",
    opacity: 1,
    zIndex: 10,
  },

  cornerTopRight: {
    position: "absolute",
    top: "235px",
    right: "430px",
    width: "80px",
    height: "280px",
    opacity: 1,
    zIndex: 8,
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: "170px",
    left: "430px",
    width: "80px",
    height: "280px",
    opacity: 1,
    zIndex: 8,
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: "240px",
    right: "1040px",
    width: "60px",
    height: "auto",
    opacity: 1,
    zIndex: 10,
  },

  pageCornerBottomRight: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    width: "250px",
    height: "auto",
    opacity: 1,
    zIndex: 9,
  },
};
