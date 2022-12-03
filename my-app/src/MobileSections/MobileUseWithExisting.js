import "../Styles/ProductDetailsMobile.css";
import { Section3Header, Section3HeaderDesc } from "../Components/TextContent";

export default function MobileUseWithExisting() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <section
        style={{ backgroundColor: "#F4F4F4" }}
        className="Info_Page_Mobile"
      >
        <div>
          <h1 className="Section_Header_Text_Mobile">
            <Section3Header />
          </h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="Section_Header_Description_Mobile">
              <Section3HeaderDesc />
            </p>
            {/* <img
            style={{ marginLeft: "200px", marginTop: "-100px" }}
            src={DB_Icon}
            alt="DB_Icon"
          /> */}
          </div>
        </div>
        <div className="hidden SectionHolder_Mobile">
          <div className=" Section_Mobile">
            <h1 className="Section_Text_Mobile">Human readable queries</h1>{" "}
            <p className="paragraph_Mobile">
              Use natural language to generate complex queries to your database
            </p>
          </div>
          <div className="Section_Mobile">
            {" "}
            <h1 className="Section_Text_Mobile">Extend databases</h1>{" "}
            <p className="paragraph_Mobile">
              Add tables and connections to other databases, regardless of the
              data models
            </p>
          </div>
          <div className=" Section_Mobile">
            {" "}
            <h1 className="Section_Text_Mobile">Useful insights</h1>{" "}
            <p className="paragraph_Mobile">
              Generate summary statistics and visuals from your data with ease
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
