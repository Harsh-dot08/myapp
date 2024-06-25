import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
export default function Alert(props) {
    const show=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1)
    }
  return (
   props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{show(props.alert.type)}</strong> {props.alert.message}.
</div>
  )
}