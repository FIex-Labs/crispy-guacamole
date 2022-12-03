import "../Styles/ProductDetails.css";
import { ContactHeader, ContactDesc } from "../Components/TextContent";
import NavBar from "../Components/NavigationBar";
import LinkedInButton from "../Components/LinkedInButton";

export default function Contact() {
  return (
    <section className="Desktop">
      <NavBar />
      <br />
      <br />
      <br />
      <h1 className="Section_Header_Text">
        <ContactHeader />
      </h1>
      <p className="Section_Header_Description">
        {" "}
        <ContactDesc />
      </p>
      <LinkedInButton />
    </section>
  );
}
