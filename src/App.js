//import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";
import Alert from "./Components/Alert";
import Footer from "./Components/footer";
import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  const [mode, set] = useState("light");
  const [but, se] = useState("Enable");
  const [txtmode, s] = useState("dark");
  const [alert, update] = useState(null);

  const show = (message, type) => {
    update({
      message: message,
      type: type,
    });
    setTimeout(() => {
      update(null);
    }, 2000);
  };

  const toggleMode = (newMode, color, title, message) => {
    if (mode !== newMode) {
      set(newMode);
      se("Disable");
      s("light");
      document.body.style.backgroundColor = color;
      show(message, "success");
      document.title = title;
    } else {
      set("light");
      se("Enable");
      s("dark");
      document.body.style.backgroundColor = "#fcfcfc";
      show(`${newMode} Mode disabled`, "success");
    }
  };

  const toogleblue = () => toggleMode("blue", "#080a4a", "Textutils Blue Mode", "Blue Mode enabled");
  const tooglered = () => toggleMode("red", "#a81414", "Textutils Red Mode", "Red Mode enabled");
  const toogleyellow = () => toggleMode("yellow", "#f5b402", "Textutils Yellow Mode", "Yellow Mode enabled");
  const tooglegreen = () => toggleMode("green", "#0cc242", "Textutils Green Mode", "Green Mode enabled");
  const toogledark = () => toggleMode("dark", "#000000", "Textutils Dark Mode", "Dark Mode enabled");

  return (
    <>
      {/*<Router>*/}
        <Navbar
          name="Textutils"
          home="Home"
          about="About Textutils"
          mode={mode}
          toggleblue={toogleblue}
          togglered={tooglered}
          toggleyellow={toogleyellow}
          togglegreen={tooglegreen}
          toggledark={toogledark}
          button={but}
          txtmode={txtmode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Textform heading="Enter Text to analyze" mode={mode} alert={show} />
          {/*<Routes>
            <Route
              exact path="/"
              element={<Textform heading="Enter Text to analyze" mode={mode} alert={show} />}
            />}
            {/*<Route exact path="/about" element={<About />} />*/}
          {/*</Routes>*/}
        </div>
        <Footer />
      {/*</Router>*/}
    </>
  );
}

export default App;

