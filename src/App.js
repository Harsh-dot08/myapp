//import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";
import Alert from "./Components/Alert";
import Footer from "./Components/footer";
//import About from './Components/About';
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
  const toogleblue = () => {
    if (
      mode === "light" ||
      mode === "green" ||
      mode === "red" ||
      mode === "yellow" ||
      mode === "dark"
    ) {
      set("blue");
      se("Disable");
      s("light");
      document.body.style.backgroundColor = "#080a4a";
      show("Blue Mode enabled", "success");
    } else {
      set("light");
      se("Enable");
      s("dark");
      document.body.style.backgroundColor = "#fcfcfc";
      show("Blue Mode disabled", "success");
    }
  };
  const tooglered = () => {
    if (
      mode === "light" ||
      mode === "green" ||
      mode === "blue" ||
      mode === "yellow" ||
      mode === "dark"
    ) {
      set("red");
      se("Disable");
      s("light");
      document.body.style.backgroundColor = "#a81414";
      show("Red Mode enabled", "success");
    } else {
      set("light");
      se("Enable");
      s("dark");
      document.body.style.backgroundColor = "#fcfcfc";
      show("Red Mode disabeld", "success");
    }
  };
  const toogleyellow = () => {
    if (
      mode === "light" ||
      mode === "green" ||
      mode === "red" ||
      mode === "blue" ||
      mode === "dark"
    ) {
      set("yellow");
      se("Disable");
      s("light");
      document.body.style.backgroundColor = "#f5b402";
      show("Yellow Mode enabled", "success");
    } else {
      set("light");
      se("Enable");
      s("dark");
      document.body.style.backgroundColor = "#fcfcfc";
      show("Yellow Mode disabled", "success");
    }
  };
  const tooglegreen = () => {
    if (
      mode === "light" ||
      mode === "blue" ||
      mode === "red" ||
      mode === "yellow" ||
      mode === "dark"
    ) {
      set("green");
      se("Disable");
      s("light");
      document.body.style.backgroundColor = "#0cc242";
      show("Green Mode enabled", "success");
    } else {
      set("light");
      se("Enable");
      s("dark");
      document.body.style.backgroundColor = "#fcfcfc";
      show("Green Mode disabled", "success");
    }
  };
  const toogledark = () => {
    if (
      mode === "light" ||
      mode === "green" ||
      mode === "red" ||
      mode === "yellow" ||
      mode === "blue"
    ) {
      set("dark");
      se("Disable");
      s("light");
      document.body.style.backgroundColor = "#000000";
      show("Dark Mode enabled", "success");
    } else {
      set("light");
      se("Enable");
      s("dark");
      document.body.style.backgroundColor = "#fcfcfc";
      show("Dark Mode disabled", "success");
    }
  };
  return (
    <>
      {/*<Navbar name="Textutils" home="Home" about="About Textutils"/>*/}
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
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Textform
          heading="Enter Text to analyze"
          mode={mode}
          alert={show}
        ></Textform>
      </div>
      {/*<About></About>*/}
      <Footer></Footer>
    </>
  );
}

export default App;