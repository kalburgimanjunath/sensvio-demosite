import React from "react";
import { SectionHead } from "./index";
import Menu from "./Menu";
export default function Header({ isValid }) {
  return (
    <div>
      <Menu type={isValid} />
    </div>
  );
}
