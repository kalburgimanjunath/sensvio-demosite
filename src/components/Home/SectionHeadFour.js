import React from "react";
import Searchbox from "../Searchbox";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import banner from "../../assets/images/banne4.png";
export default function SectionHeadFour() {
  return (
    <section className="hero text-center">
      <div className="hero-body">
        <h2 className="text-white">
          Experience new age AI with skill games by{" "}
        </h2>
        <p style={{ color: "#149ec4" }}>Composing | Counting | Winning</p>

        <div className="text-white">
          <img src={banner} alt="" width="70%" />
          <p>Play | Learning | Earn</p>

          <p>Earn the crypto coins into your wallet.</p>
        </div>
      </div>
    </section>
  );
}
