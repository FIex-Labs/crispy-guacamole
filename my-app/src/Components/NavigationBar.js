import React from "react";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    // <ul>
    //   <li>
    //     <button className="header_button">Pricing</button>
    //   </li>
    //   <li>
    //     <button className="header_button">Contact</button>
    //   </li>
    // </ul>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a class="active" href="#about">
          About
        </a>
      </li>
    </ul>
  );
}
