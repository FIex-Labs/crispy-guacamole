import { useEffect } from "react";
import "../Styles/App.css";
import MobileLandingPage from "../MobileSections/MobileLandingSection";
import MobileNaturalLanguage from "../MobileSections/MobileNaturalLanguage";
import MobileAutomaticProvisioning from "../MobileSections/MobileAutomaticProvisioning";
import MobileUseWithExisting from "../MobileSections/MobileUseWithExisting";
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
      <MobileLandingPage />
      <MobileNaturalLanguage />
      <MobileAutomaticProvisioning />
      <MobileUseWithExisting />
    </div>
  );
}
