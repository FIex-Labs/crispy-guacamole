import "../Styles/ProductDetails.css";

export default function NaturalLanguage() {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <section className="Info_Page" style={{ backgroundColor: "#F4F4F4" }}>
        <h1 className="Section_Header_Text">
          {" "}
          Powerful database abstractions{" "}
        </h1>
        <p className="Section_Header_Description">
          {" "}
          Flex Labs will handle the complicated database details, such as data
          models and schemas. This leaves you with more bandwidth to focus on
          things the that matter.{" "}
        </p>
        <div>
          <div className="hidden Section">
            <h1 className="Section_Text">Data models that fit</h1>{" "}
            <p className="paragraph">
              {" "}
              We'll help you pick a data model that best fits your use case.
              Stress less about which data model to use.
            </p>
          </div>
          <div className="hidden Section">
            {" "}
            <h1 className="Section_Text">
              Intelligently generated schemas
            </h1>{" "}
            <p className="paragraph">
              {" "}
              Based on your input, we'll come up with table schemas to fit your
              data. We give you the flexibility to refine and tweak it to your
              individual needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
