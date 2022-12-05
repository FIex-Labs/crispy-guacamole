import "../Styles/PillButton.css";
import { Link } from "react-router-dom";
import Chevron from "../Media/Chevron.svg";
export default function PillButton(props) {
  return (
    <button className="pill" style={props.style}>
      <Link
        style={{ textDecoration: "none", color: "#000000" }}
        to={props.link}
      >
        {props.children}
      </Link>
      <img
        className="Chevron"
        style={{ height: "75%", margin: "1px -5px 0px 10px" }}
        src={Chevron}
        alt="Chevron"
      />
    </button>
  );
}
