import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/images/logo_092.png";
export default function Menu({ isValid }) {
  const arrMenu = ["Shop", "Modals", "Resources"];
  return (
    <Navbar color="light" expand="md" light className="navmenu">
      <NavbarBrand href="/">
        <img src={logo} alt="" width="120px" />
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav navbar className="navbar-end">
          {arrMenu.map((item) => {
            return (
              <NavItem>
                <NavLink href={`${item}`}>{item}</NavLink>
              </NavItem>
            );
          })}
          {isValid === true ? (
            <a
              className="button is-rounded"
              href="./login"
              style={{ color: "#000" }}
            >
              Login
            </a>
          ) : (
            <NavItem>
              <NavLink href="./dashboard">Dashboard</NavLink>
            </NavItem>
          )}
          {isValid === true ? (
            <a
              className="button is-rounded"
              href="./login"
              style={{ color: "#000" }}
            >
              Login
            </a>
          ) : (
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <button
                  class="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Language</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">
                    English
                  </a>
                  <a class="dropdown-item">Hindi</a>
                  <a class="dropdown-item">Marathi</a>
                  <a class="dropdown-item">Kannada</a>
                  <a class="dropdown-item">Telagu</a>
                  <a class="dropdown-item">Tamil</a>
                </div>
              </div>
            </div>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
