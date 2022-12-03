import "../Styles/ProductDetails.css";
import { PricingHeader, PricingDesc } from "../Components/TextContent";
import NavBar from "../Components/NavigationBar";
export default function Pricing() {
  return (
    <section className="Desktop">
      <NavBar />
      <br />
      <br />
      <br />

      <h1 className="Section_Header_Text">
        <PricingHeader />
      </h1>
      <p className="Section_Header_Description">
        <PricingDesc />
      </p>
    </section>
  );
}
