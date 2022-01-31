import React from "react";
import braincasting from "../assets/images/braincastimg-00.png";
import braincast from "../assets/images/braincsat2-00.png";
import deepcast from "../assets/images/deepcast-00.png";
import brandcast from "../assets/images/brandcast-00.png";
import topban from "../assets/images/top_ban.jpg";
import explore from "../assets/images/explore.png";
import { Footer, Header } from "../components";
export default function Shop() {
  return (
    <div>
      <section className="first_section">
        <Header isValid={true} />
        <h1>
          Welcome to Sensvio:
          <span className="button btn-success">
            Your Entered Code Validation Successful.Now you can download the app
            to proceed further.
          </span>
        </h1>
        <div className="container text-white">
          <div className="row">
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
                    <button type="button">Install App</button>
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
                    <button type="button">Install App</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column" style={{ background: "#351854" }}>
              <div className="columns">
                <div className="column">
                  <img src={deepcast} alt="" />
                </div>
                <div className="column text-left">
                  <p>
                    Deepcast series has to offer wide options with twist &
                    turens to choose and win the goals.
                  </p>
                  <p>
                    <button type="button">Install App</button>
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
                    Brandcast edition with all the great brands to fight & win
                    the ultimate title of experience.
                  </p>
                  <p>
                    <button type="button">Install App</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
