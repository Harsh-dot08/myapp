import React,{useState} from 'react'

export default function About() {
    const [mystyle,uy]=useState({
        backgroundColor :"white",
        color : "black"
    })
    const [my,u]=useState("Dark")
    const toogle=()=>{
        if(mystyle.color==="black"){
            uy({
                backgroundColor:"black",
                color:"white"
            })
            u("Light")
        }else{
            uy({
                backgroundColor:"white",
                color:"black"
            })
            u("Dark")
        }
    }
  return (
    <div className='container' style={mystyle}>
      Hello
      <button className="btn btn-primary mx-3" onClick={toogle}>{my}</button>
    </div>
  )
}