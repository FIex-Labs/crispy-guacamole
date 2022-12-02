import "../Styles/ProductDetails.css";
import { Section2Header, Section2HeaderDesc } from "../Components/TextContent";
export default function AutomaticProvisioning() {
  return (
    <section className="Info_Page">
      <h1 className="Section_Header_Text">
        <Section2Header />
      </h1>
      <p className="Section_Header_Description">
        <Section2HeaderDesc />
      </p>

      <div className="SectionHolder">
        <div className="hidden Section">
          <h1 className="Section_Text">Optimized at every level</h1>{" "}
          <p className="paragraph">
            Flex Labs will periodically reconfigure your database's settings in
            order to get you the best performance at a reasonable price.
          </p>
        </div>
        <div className="hidden Section">
          <h1 className="Section_Text">Intelligent monitoring and oversight</h1>{" "}
          <p className="paragraph">
            Create customized profiles for cloud usage.
          </p>
        </div>
      </div>
    </section>
  );
}
