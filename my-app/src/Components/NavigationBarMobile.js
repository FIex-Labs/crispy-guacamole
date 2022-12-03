import React from "react";
import "../Styles/NavBar.css";
import FlexLabsPng from "../Media/flexlabs.png";
import { Link } from "react-router-dom";

export default function NavBarMobile(props) {
  return (
    <div style={props.style}>
      <ul style={{ display: "flex", alignItems: "center" }}>
        <li style={{ margin: "0px" }}>
          <Link to="/">
            <img style={{ width: "55px" }} src={FlexLabsPng} alt="Logo" />
          </Link>
        </li>
        <li>
          <Link className="NavTextMobile" to="/pricing">
            {" "}
            Pricing
          </Link>
        </li>
        <li>
          <Link className="NavTextMobile" to="/contact">
            {" "}
            Contact
          </Link>
        </li>
        <li>
          <Link className="NavTextMobile" to="/usage">
            {" "}
            Use Cases
          </Link>
        </li>
      </ul>
    </div>
  );
}
