import NavBar from "../Components/NavigationBar";
import PillButton from "../Components/PillButton";
import "../Styles/LandingSection.css";
import FrontPageDemo from "../Media/FrontPageDemoCheck.svg";

export default function LandingPage() {
  return (
    <section className="Desktop">
      <NavBar />
      <div className="title_box ">
        <h1 className="title_text"> Databases made simple.</h1>
        <p className="title_description">
          Set up a database in minutes, using natural language.
        </p>
        <div>
          <PillButton link="/pricing" style={{ backgroundColor: "#87DC32" }}>
            {" "}
            Start{" "}
          </PillButton>
          <PillButton
            link="/contact"
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
        <img className="DemoImg" src={FrontPageDemo} alt="Product Demo" />
      </div>
    </section>
  );
}
