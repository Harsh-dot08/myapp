//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import Alert from './Components/Alert';
//import About from './Components/About';
function App() {
  const [mode,set]=useState("light")
  const [but,se]=useState("Enable")
  const [txtmode,s]=useState("dark")
  const [alert,update]=useState(null)
  const show=(message,type)=>{
    update({
      message: message,
      type: type ,
    })
    setTimeout(()=>{
      update(null)
    },2000)
  }
  const tooglemode=()=>{
    if(mode==="light"){
      set("dark")
      se("Disable")
      s("light")
      document.body.style.backgroundColor="#080a4a"
      show("Dark Mode enabled","success")
    }else{
      set("light")
      se("Enable")
      s("dark")
      document.body.style.backgroundColor="#fcfcfc"
      show("Light Mode enabled","success")
    }
  }
  return (
    <>
    {/*<Navbar name="Textutils" home="Home" about="About Textutils"/>*/}
    <Navbar name="Textutils" home="Home" about="About Textutils" mode={mode} toogle={tooglemode} button={but} txtmode={txtmode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Textform heading="Enter Text to analyze" mode={mode} alert={show}></Textform>
    </div>
    {/*<About></About>*/}
    
    </>
  );
}

export default App;
