import React from "react";
import Searchbox from "../Searchbox";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import banner from "../../assets/images/mobilebg_01.png";
export default function SectionHeadTwo() {
  return (
    <section className="hero text-center">
      <div className="hero-body">
        <h1>
          <span style={{ color: "#149ec4" }}>
            <span className="yellow_border"></span>Connecting
          </span>{" "}
          <span className="text-white">Via Mobile</span>
        </h1>
        <p className="text-white">
          Mobile as platform which connects custom device to discover & learn
          new things in a whole new world.
        </p>
        <div className="columns text-white">
          <div className="column" style={{ textAlign: "right" }}>
            <div>
              <strong
                className="text-white"
                style={{ fontSize: "22px", fontWeight: "normal" }}
              >
                Device S<span className="yellow_border"></span>ourcing
              </strong>
              <p></p>
              <p>
                New IOT(Internet of Things) device lets you express in teact,
                which responds to peoples value a& increase sensing capabilities
                with new learning experience.
              </p>
              <strong
                className="text-white"
                style={{ fontSize: "22px", fontWeight: "normal" }}
              >
                Composing Th<span className="yellow_border"></span>oughts
              </strong>
              <p></p>
              <p>
                New IOT(Internet of Things) device lets you express in teact,
                which responds to peoples value a& increase sensing capabilities
                with new learning experience.
              </p>
            </div>
          </div>
          <div className="column">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
