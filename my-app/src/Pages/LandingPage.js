import NavBar from "../Components/NavigationBar";
import PillButton from "../Components/PillButton";
import "../Styles/LandingPage.css";
import FrontPageDemo from "../Media/FrontPageDemo.svg";

export default function LandingPage() {
  return (
    <section>
      <NavBar />
      <div
        className="hidden"
        style={{
          position: "absolute",
          width: "580px",
          height: "260px",
          top: "300px",
        }}
      >
        <h1 className="title_text"> Databases made simple.</h1>
        <p className="title_description">
          Set up a database in minutes, using natural language.
        </p>
        <div>
          <PillButton style={{ backgroundColor: "#87DC32" }}>
            {" "}
            Start{" "}
          </PillButton>
          <PillButton
            style={{
              backgroundColor: "#FFD600FA",
              margin: "0px 0px 0px 20px",
            }}
          >
            {" "}
            Contact{" "}
          </PillButton>
        </div>
      </div>
      <div className="DemoBox">
        <img src={FrontPageDemo} alt="Product Demo"></img>
      </div>
    </section>
  );
}
