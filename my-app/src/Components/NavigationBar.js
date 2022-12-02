import React from "react";
import "../Styles/NavBar.css";
import FlexLabsPng from "../Media/flexlabs.png";

export default function NavBar(props) {
  return (
    <div style={{ alignItems: "center" }}>
      <ul style={{ display: "flex", alignItems: "center" }}>
        <li style={{ padding: "0px" }}>
          <a href="/pricing">
            <img style={{ width: "55px" }} src={FlexLabsPng} alt="Logo" />
          </a>
        </li>
        <li>
          <a className="NavText" href="/pricing">
            {" "}
            Pricing
          </a>
        </li>
        <li>
          <a className="NavText" href="/contact">
            {" "}
            Contact
          </a>
        </li>
        <li>
          <a className="NavText" href="/usage">
            {" "}
            Use Cases
          </a>
        </li>
      </ul>
    </div>
  );
}
