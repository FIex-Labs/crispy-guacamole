import NavBar from "../Components/NavigationBar";
import PillButton from "../Components/PillButton";
import FrontPageDemo from "../Media/FrontPageDemo.svg";

export default function MobileLandingPage() {
  return (
    <section
      style={{
        width: "100vw",
        alignItems: "center",
        height: "840px",
        padding: "5%",
      }}
    >
      <NavBar style={{ width: "100%", fontSize: "18px" }} />

      <div style={{ fontFamily: "Inter", marginBottom: "20px" }}>
        <h1
          style={{ fontSize: "42px", fontWeight: "500", marginBottom: "20px" }}
        >
          {" "}
          Databases made simple.
        </h1>
        <p
          style={{
            marginTop: "0px",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
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

      <img style={{ width: "100%" }} src={FrontPageDemo} alt="Product Demo" />
    </section>
  );
}
