import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Modules,
  Resources,
  Login,
  Dashboard,
} from "./pages/index";
import { Header, Footer } from "./components/index";
import "./App.css";
function App() {
  return (
    <div className="container ">
      <ParallaxProvider>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/modals" exact element={<Modules />} />
          <Route path="/resources" exact element={<Resources />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/*" exact element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
