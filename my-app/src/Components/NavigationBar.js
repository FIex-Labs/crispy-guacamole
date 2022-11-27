import React from "react";
import "../Styles/NavBar.css";
import FlexLabsPng from "../Media/flexlabs.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <ul>
      <li style={{ padding: "0px" }}>
        <Link to="/pricing">
          <img style={{ width: "45px" }} src={FlexLabsPng} alt="Logo" />
        </Link>
      </li>
      <li>
        <Link className="text" to="/pricing">
          {" "}
          Pricing
        </Link>
      </li>
      <li>
        <Link className="text" to="/contact">
          {" "}
          Contact
        </Link>
      </li>
      <li>
        <Link className="text" to="/usage">
          {" "}
          Use Cases
        </Link>
      </li>
    </ul>
  );
}
