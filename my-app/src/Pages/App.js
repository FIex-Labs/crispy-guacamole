import { useEffect } from "react";
import "../Styles/App.css";
import LandingPage from "../Sections/LandingSection";
import NaturalLanguage from "../Sections/NaturalLanguage";
import AutomaticProvisioning from "../Sections/AutomaticProvisioning";
import UseWithExisting from "../Sections/UseWithExisting";
import Footer from "../Sections/Footer";

export default function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    console.log();
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  });
  return (
    <div>
      <LandingPage />
      <NaturalLanguage />
      <AutomaticProvisioning />
      <UseWithExisting />
    </div>
  );
}
