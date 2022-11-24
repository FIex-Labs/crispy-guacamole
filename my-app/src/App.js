import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { useEffect } from "react";
function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
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
      <section>
        <h1> Easy to use </h1>
        <p>
          {" "}
          Tell us in plain english what you would like to store. We'll help you
          decide what data model to use, and generate schemas for you
          automatically.{" "}
        </p>
      </section>
      <section>
        <h1> Automatic provisioning</h1>
        <p>
          {" "}
          Confused about all the configuration options when hosting a database
          in the cloud? We take note of your preferences as well as the database
          needs, and come up with the best configurations for you.
        </p>
      </section>
      <section>
        <h1> Use with existing database</h1>
        <p>
          If you have an existing database, it is easy to migrate your database
          and use our platform. We provide a suite of tools to help your team
          work with the database in an easy manner.
        </p>
        <div className="subsection">
          <div>
            <h3>Human readable queries</h3>
            <p>
              {" "}
              Use natural language to generate complex queries to your database{" "}
            </p>
          </div>
          <div>
            <h3>Extend your database</h3>
            <p>
              {" "}
              Add tables and connections to other databases, regardless of the
              data model
            </p>
          </div>
          <div>
            <h3>Useful insights</h3>
            <p>Generate summary statistics and visuals </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
