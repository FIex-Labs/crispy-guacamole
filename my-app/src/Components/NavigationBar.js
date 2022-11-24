import React from "react";
import "../Styles/NavBar.css";
import FlexLabsPng from "../Media/flexlabs.png";

export default function NavBar() {
  return (
    <ul>
      <li>
        <img style={{ width: "45px" }} src={FlexLabsPng} alt="Logo" />
      </li>
      <li>
        <a href="#home">Pricing</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">Use Cases</a>
      </li>
    </ul>
  );
}
