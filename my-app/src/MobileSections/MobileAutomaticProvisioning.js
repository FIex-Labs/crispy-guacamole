import "../Styles/ProductDetailsMobile.css";
import { Section2Header, Section2HeaderDesc } from "../Components/TextContent";
export default function MobileAutomaticProvisioning() {
  return (
    <section className="Info_Page_Mobile">
      <h1 className="Section_Header_Text_Mobile">
        <Section2Header />
      </h1>
      <p className="Section_Header_Description_Mobile">
        <Section2HeaderDesc />
      </p>
      <div className="SectionHolder_Mobile">
        <div className="hidden Section_Mobile">
          <h1 className="Section_Text_Mobile">Optimized at every level</h1>{" "}
          <p className="paragraph_Mobile">
            Flex Labs will periodically reconfigure your database's settings in
            order to get you the best performance at a reasonable price.
          </p>
        </div>
      </div>
    </section>
  );
}
