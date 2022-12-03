import "../Styles/ProductDetails.css";

import { Section3Header, Section3HeaderDesc } from "../Components/TextContent";
export default function UseWithExisting() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <section style={{ backgroundColor: "#F4F4F4" }} className="Info_Page">
        <div>
          <h1 className="Section_Header_Text">
            <Section3Header />
          </h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="Section_Header_Description">
              <Section3HeaderDesc />
            </p>
            {/* <img
            style={{ marginLeft: "200px", marginTop: "-100px" }}
            src={DB_Icon}
            alt="DB_Icon"
          /> */}
          </div>
        </div>
        <div className="hidden SectionHolder">
          <div className=" Section">
            <h1 className="Section_Text">Human readable queries</h1>{" "}
            <p className="paragraph">
              Use natural language to generate complex queries to your database
            </p>
          </div>
          <div className="Section">
            {" "}
            <h1 className="Section_Text">Extend databases</h1>{" "}
            <p className="paragraph">
              Add tables and connections to other databases, regardless of the
              data models
            </p>
          </div>
          <div className=" Section">
            {" "}
            <h1 className="Section_Text">Useful insights</h1>{" "}
            <p className="paragraph">
              Generate summary statistics and visuals from your data with ease
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
