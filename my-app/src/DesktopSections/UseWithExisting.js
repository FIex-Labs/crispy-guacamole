import "../Styles/ProductDetails.css";
import DB_Icon from "../Media/DB.svg";

export default function UseWithExisting() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <section style={{ backgroundColor: "#F4F4F4" }} className="Info_Page">
        <div>
          <h1 className="Section_Header_Text">
            Compatible with existing databases{" "}
          </h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="Section_Header_Description">
              If you have an existing database, it is easy to connect your
              database and use our platform. We provide a suite of tools to help
              your team work with the database in an easy manner.
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
