import React from "react";
import {
  Header,
  SectionHead,
  SectionHeadTwo,
  SectionHeadThree,
  SectionHeadFour,
  Footer,
} from "../components/index";
export default function Home() {
  return (
    <div>
      <section className="first_section">
        <Header />
        <SectionHead />
      </section>
      <section className="second_section">
        <SectionHeadTwo />
      </section>
      <section className="third_section">
        <SectionHeadThree />
      </section>
      <section className="fourth_section">
        <SectionHeadFour />
      </section>

      <Footer />
    </div>
  );
}
