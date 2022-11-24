import "../Styles/PillButton.css";

export default function PillButton(props) {
  return (
    <button className="pill" style={props.style}>
      {props.children}
    </button>
  );
}
