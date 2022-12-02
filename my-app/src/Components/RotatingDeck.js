import "../Styles/RotatingDeck.css";
import { useEffect } from "react";
export default function RotatingDeck(props) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let Deck = document.getElementById("Deck");
      console.log(Deck);

      console.log(entry.target.id);
      let child = document.getElementById(entry.target.id);

      if (entry.isIntersecting) {
        entry.target.classList.add("AnimateDeckFade");
      } else {
        entry.target.classList.add("AnimateDeckFade");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".AnimateDeckItem");
  console.log();
  hiddenElements.forEach((el) => {
    observer.observe(el);
  });

  return (
    <div id="DeckHolder" style={{ width: "inherit" }}>
      <ul
        id="Deck"
        className=""
        style={{
          backgroundColor: "transparent",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {props.children.map((img, i) => {
          return (
            <li
              id={i}
              className="AnimateDeckItem"
              style={{ padding: "0px 25px 0px 25px", display: "block" }}
            >
              {img}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
