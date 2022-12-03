import "../Styles/PillButton.css";
import { Link } from "react-router-dom";

export default function PillButton(props) {
  return (
    <button className="pill" style={props.style}>
      <Link style={{ textDecoration: "none" }} to={props.link}>
        {props.children}
      </Link>
    </button>
  );
}
