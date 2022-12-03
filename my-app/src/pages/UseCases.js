import "../Styles/ProductDetails.css";
import { UseCasesHeader, UseCasesDesc } from "../Components/TextContent";
import NavBar from "../Components/NavigationBar";
export default function UseCases() {
  return (
    <section className="Desktop">
      <NavBar />
      <br />
      <br />
      <br />
      <h1 className="Section_Header_Text">
        <UseCasesHeader />
      </h1>
      <p className="Section_Header_Description">
        <UseCasesDesc />
      </p>
    </section>
  );
}
