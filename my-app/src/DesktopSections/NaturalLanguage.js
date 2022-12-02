import "../Styles/ProductDetails.css";
import RotatingDeck from "../Components/RotatingDeck";
import RedisLogo from "../Media/Logos/RedisTextLogo.svg";
import PostgresLogo from "../Media/Logos/PostgreSQLLogo.svg";

import { Section1Header, Section1HeaderDesc } from "../Components/TextContent";
export default function NaturalLanguage() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <section className="Info_Page" style={{ backgroundColor: "#F4F4F4" }}>
        <h1 className="Section_Header_Text">
          <Section1Header />
        </h1>
        <p className="Section_Header_Description">
          <Section1HeaderDesc />
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
        <div>
          <div className="hidden Section">
            <h1 className="Section_Text">Data models that fit</h1>{" "}
            <p className="paragraph">
              The choice of which database to use can be tough. We'll analyze
              your use cases and find the best one for you.
            </p>
          </div>
          <div className="hidden Section">
            {" "}
            <h1 className="Section_Text">
              Intelligently generated schemas
            </h1>{" "}
            <p className="paragraph">
              {" "}
              Tell us about your data and what it looks like. Our product will
              give you a head start by generating a schema that best fits your
              data. You can modify the schema afterwards to fit your ideas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
