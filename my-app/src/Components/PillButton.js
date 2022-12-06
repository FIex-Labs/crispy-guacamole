import "../Styles/PillButton.css";
import { Link, Navigate } from "react-router-dom";
import Chevron from "../Media/Chevron.svg";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
export default function PillButton(props) {
  const navigate = useNavigate();
  let link = props.link;
  const handleOnClick = useCallback(() => navigate(link));

  let translate_dist = 3;
  const moveChevron = (event) => {
    let icon = event.target;
    icon.children[0].style.transitionDuration = "0.25s";
    // icon.style.width = `${width + translate_dist}px`;
    icon.children[0].style.transform = `translateX(${translate_dist}px)`;
  };
  const moveBackChevron = (event) => {
    let icon = event.target;
    icon.children[0].style.transitionDuration = "0.25s";
    // icon.style.width = `${width - translate_dist}px`;
    icon.children[0].style.transform = `translateX(${-translate_dist}px)`;
  };

  return (
    <button
      className="pill"
      style={props.style}
      onMouseEnter={moveChevron}
      onMouseLeave={moveBackChevron}
      onClick={handleOnClick}
    >
      {props.children}

      <img
        className="Chevron"
        id="ChevronIcon"
        style={{ height: "75%", margin: "2px -5px 0px 10px" }}
        src={Chevron}
        alt="Chevron"
      />
    </button>
  );
}
