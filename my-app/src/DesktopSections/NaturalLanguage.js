import "../Styles/ProductDetails.css";
import RotatingDeck from "../Components/RotatingDeck";
import RedisLogo from "../Media/Logos/RedisTextLogo.svg";
import PostgresLogo from "../Media/Logos/PostgreSQLLogo.svg";
import HorizontalSpacer from "../Components/HorizontalSpacer";
import NLInput from "../Media/NLInput.svg";
import NLOutput from "../Media/NLOutput.svg";

import { Section1Header, Section1HeaderDesc } from "../Components/TextContent";
export default function NaturalLanguage() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <section className="Info_Page" style={{ backgroundColor: "#F4F4F4" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "60% 40%",
            padding: "0px 50px 0px 0px",
          }}
        >
          <div>
            <h1 className="Section_Header_Text">
              <Section1Header />
            </h1>
            <p className="Section_Header_Description">
              <Section1HeaderDesc />
            </p>
          </div>
          <div style={{ margin: "-50px 0px 0px 0px", display: "grid" }}>
            <img
              className="hidden OverImage"
              style={{ width: "300px" }}
              src={NLOutput}
              alt="NLOutput"
            />
            <img
              className="hidden UnderImage"
              style={{ width: "250px" }}
              src={NLInput}
              alt="NLInput"
            />
          </div>
        </div>

        <div className=" Section">
          <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
            {" "}
            <div>
              <h1 className="Section_Text">Find your database</h1>{" "}
              <p className="paragraph">
                The choice of which database to use can be tough. We'll analyze
                your use cases and find the best one for you.
              </p>
              <RotatingDeck>
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
              </RotatingDeck>
            </div>
            <div style={{ margin: "0px 0px 0px 25px" }}>
              <h1 className="Section_Text">Intelligently generated schemas</h1>
              <p className="paragraph">
                {" "}
                Our product will give you a head start by generating a schema.
                You can modify it anytime to fit your ideas.
              </p>
              <RotatingDeck>
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
                <img className="Deck" src={RedisLogo} alt="RedisLogo" />
                <img className="Deck" src={PostgresLogo} alt="PostgresLogo" />
              </RotatingDeck>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
