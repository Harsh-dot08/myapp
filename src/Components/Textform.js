import React, {useState} from "react";
export default function Textform(props) {
  const [text, setext] = useState("Enter your text");
  const handlechange = (event) => {
    setext(event.target.value);
  };
  const clicked = () => {
    setext("");
    //document.title="Text Utils is Good"
  };
  const btnclick1 = () => {
    setext(text.toUpperCase());
    props.alert("Converted to uppercase","success")
  };
  const btnclick2 = () => {
    setext(text.toLowerCase());
    props.alert("Converted to lowercase","success")
  };
  const btnclick3 = () => {
    setext("");
    props.alert("Text Cleared","success")
  };
  const space=()=>{
    let newtext=text.split(/[ ]+/)
    setext(newtext.join(" "))
    props.alert("Extra space removed","success")
  }
  const copy=()=>{
    let copu=document.querySelector("#mybox")
    copu.select()
    navigator.clipboard.writeText(copu.value);
    document.getSelection().removeAllRanges()
    props.alert("Text Copied","success")
  }
  const upper=()=>{
    const fish=text.split(" ")
    for(let i=0;i<fish.length;i++){
        fish[i]=fish[i].charAt(0).toUpperCase()+fish[i].slice(1)
        }
        setext(fish.join(" "))
        props.alert("First letter converted to uppercase","success")
  }
  const slow=()=>{
    if(text===""){
        return "No Text Avilable kindly enter the text to get time"
    }else{
         return `a slow reader can read it in ${text.split(" ").length * 0.0083} minutes`
    }
  }
  const fast=()=>{
    if(text===""){
    }else{
        return `a fast reader can read it in ${text.split(" ").length * 0.0022} minutes`
    }
  }
  const count=()=>{
    if(text===""){
        return 0;
    }else{
        return text.split(" ").length
    }
  }
  const preview=()=>{
    if(text===""){
        return "Enter some text to Preview";
    }else{
        return text
    }
  }
  const bg=()=>{
    if(props.mode==="red"){
        return "#a81414"
    }else if(props.mode==="yellow"){
        return "#f5b402"
    }else if(props.mode==="dark"){
        return "#000000"
    }else if(props.mode==="blue"){
        return "#080a4a"
    }else if(props.mode==="green"){
        return  "#0cc242"
    }else{
        return "#fcfcfc"
    }
  }
  return (
    <>
      <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>{props.heading }</h1>
      <div className={`my-3 text-${props.mode==="light"?"dark":"light"}`}>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className={`form-control text-${props.mode==="light"?"dark":"light"}`}
          style={{backgroundColor: bg()}}
          id="mybox"
          rows="8"
          value={text}
          onChange={handlechange}
          onClick={clicked}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={btnclick1}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={btnclick2}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={upper}>
        Capitallize
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={btnclick3}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={space}>
        Remove Space
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={copy}>
        Copy Text
      </button>
      <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
        <h1>Details of your text</h1>
        <p>
          {count()} words and {text.length} characters
        </p>
        <p>
          {slow()}
          <br/>
          {fast()}
        </p>
        <div style={{ marginBottom: '15vh' }}>
        <h2>Preview</h2>
        <p>{preview()}</p>
        </div>
      </div>
    </>
  );
}
