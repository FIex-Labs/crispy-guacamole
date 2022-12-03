import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

// Import Pages
import App from "./pages/App.js";
import MobileApp from "./pages/MobileApp";

import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import UseCases from "./pages/UseCases";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserView>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="usage" element={<UseCases />} />
        </Routes>
      </HashRouter>
    </BrowserView>
    <MobileView>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<MobileApp />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/usage" element={<UseCases />} />
        </Routes>
      </HashRouter>
    </MobileView>
  </React.StrictMode>
);
