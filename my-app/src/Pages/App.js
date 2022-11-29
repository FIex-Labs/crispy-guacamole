import { useEffect } from "react";
import "../Styles/App.css";
import LandingPage from "../DesktopSections/LandingSection";
import NaturalLanguage from "../DesktopSections/NaturalLanguage";
import AutomaticProvisioning from "../DesktopSections/AutomaticProvisioning";
import UseWithExisting from "../DesktopSections/UseWithExisting";
import Footer from "../DesktopSections/Footer";

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
