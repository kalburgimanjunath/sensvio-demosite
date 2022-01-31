import React from "react";
import Searchbox from "../Searchbox";
import topban from "../../assets/images/top_ban.jpg";
// import { SectionHeadFour, SectionHeadThree, SectionHeadTwo } from "..";
export default function SectionHead() {
  return (
    <>
      <section className="hero text-center">
        <div className="hero-body">
          <h1 className="text-white" style={{ transition: "all .5s ease-in" }}>
            Shaping Young Minds
          </h1>

          <p className="subtitle text-white">
            New Age of Digital Transformation through Artificial
            Intelligence,born with solution to create minds.
          </p>
        </div>
        <Searchbox />
      </section>
    </>
  );
}
