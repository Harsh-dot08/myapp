import React, { useState } from "react";
export default function Textform(props) {
  const [text, setext] = useState("Enter your text");
  const handlechange = (event) => {
    setext(event.target.value);
  };
  const clicked = () => {
    setext("");
  };
  const btnclick1 = () => {
    setext(text.toUpperCase());
  };
  const btnclick2 = () => {
    setext(text.toLowerCase());
  };
  const btnclick3 = () => {
    setext("");
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="my-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handlechange}
          onClick={clicked}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={btnclick1}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={btnclick2}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={btnclick3}>
        Clear Text
      </button>
      <div className="container my-3">
        <h1>Details of your text</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          a slow reader can read it in {text.split(" ").length * 0.0083} minutes
          and a normal user can read it in {text.split(" ").length * 0.0022}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
