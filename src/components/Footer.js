import React from "react";
import whitelogo from "../assets/images/white_logo_0029.png";
import email0 from "../assets/images/email_0090.png";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="columns">
          <div className="column">
            <ul>
              <li>Shop</li>
              <li>Modules</li>
              <li>Games</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>Join Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="column subscribe">
            {/* <img src={email0} alt="" /> */}
            <input type="text" />
          </div>
          <div className="column text-right">
            <img src={whitelogo} alt="" width="100" />
            <p>Copy right 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
