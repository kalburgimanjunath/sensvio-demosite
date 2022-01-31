import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import braincasting from "../../assets/images/braincastimg-00.png";
import braincast from "../../assets/images/braincsat2-00.png";
import deepcast from "../../assets/images/deepcast-00.png";
import brandcast from "../../assets/images/brandcast-00.png";
import topban from "../../assets/images/top_ban.jpg";
import explore from "../../assets/images/explore.png";
export default function SectionHeadThree() {
  const TopComponent = () => {
    return (
      <ParallaxBanner
        layers={[
          { image: topban, speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                <p className="subtitle">
                  New Age of Digital Transformation through Artificial
                  Intelligence,born with solution to create minds.
                </p>
              </div>
            ),
          },
          { image: topban, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-white font-thin">Hello World!</h1>
          <p className="subtitle">
            New Age of Digital Transformation through Artificial
            Intelligence,born with solution to create minds.
          </p>
        </div>
      </ParallaxBanner>
    );
  };
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      easing: "easeOutQuad",
      translateX: [0, 100],
    };
  return (
    <section className="hero text-center">
      <div className="hero-body text-white" style={{ padding: "10px" }}>
        <h1>
          <span style={{ color: "#149ec4" }}>
            <span className="yellow_border"></span>Skills &{" "}
          </span>
          <span>Machine Learning Games</span>
        </h1>
        <p>
          Multichain gaming echosystem on web 3.0 technologies an ultimate power
          on blockchain network to create,play,finance the new experience of
          your choice for the future today.
        </p>
        <div className="columns">
          <div className="column" style={{ background: "#102d2d" }}>
            <div className="columns">
              <div className="column">
                <img src={braincasting} alt="" />
              </div>
              <div className="column text-left">
                <p>
                  Dreamcast series in the game ecosystem Ai led technology to
                  win in crypto coins.
                </p>
                <p>
                  <img src={explore} alt="" width="150" />
                </p>
              </div>
            </div>
          </div>
          <div className="column" style={{ background: "#162e50" }}>
            <div className="columns">
              <div className="column">
                <img src={braincast} alt="" />
              </div>
              <div className="column text-left">
                <p>
                  Braincast network gives way to experience the life into
                  different situation to win the future.
                </p>
                <p>
                  <img src={explore} alt="" width="150" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column" style={{ background: "#351854" }}>
            <div className="columns">
              <div className="column">
                <img src={deepcast} alt="" />
              </div>
              <div className="column text-left">
                <p>
                  Deepcast series has to offer wide options with twist & turens
                  to choose and win the goals.
                </p>
                <p>
                  <img src={explore} alt="" width="150" />
                </p>
              </div>
            </div>
          </div>
          <div className="column" style={{ background: "#41244b" }}>
            <div className="columns">
              <div className="column">
                <img src={brandcast} alt="" />
              </div>
              <div className="column text-left">
                <p>
                  Brandcast edition with all the great brands to fight & win the
                  ultimate title of experience.
                </p>
                <p>
                  <img src={explore} alt="" width="150" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
