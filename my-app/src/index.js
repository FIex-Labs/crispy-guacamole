import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import MobileApp from "./Pages/MobileApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserView>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<p>contact</p>} />
          <Route path="/pricing" element={<p>pricing</p>} />
          <Route path="/usage" element={<p>use cases</p>} />
        </Routes>
      </BrowserRouter>
    </BrowserView>
    <MobileView>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileApp />} />
          <Route path="/contact" element={<p>contact</p>} />
          <Route path="/pricing" element={<p>pricing</p>} />
          <Route path="/usage" element={<p>use cases</p>} />
        </Routes>
      </BrowserRouter>
    </MobileView>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
