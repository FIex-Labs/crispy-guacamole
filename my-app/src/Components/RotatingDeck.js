import "../Styles/RotatingDeck.css";

export default function RotatingDeck(props) {
  return (
    <div id="DeckHolder" style={props.style}>
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
              key={i}
              className="AnimateDeckItem"
              style={{ margin: "25px 25px 25px 25px", display: "block" }}
            >
              {img}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
