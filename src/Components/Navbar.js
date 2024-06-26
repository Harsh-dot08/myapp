import React from "react";
import PropTypes from "prop-types";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.name}
          </a>
          <a className="navbar-brand" href="/">{props.home}</a>
          <a className="navbar-brand" href="/">{props.about}</a>
          {/*<form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
          <div className={`form-check form-switch text-light`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggledark}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>{props.button} Dark Mode</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-danger`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglered}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>{props.button} Red Color</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-warning`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleyellow}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>{props.button} Yellow Color</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-success`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglegreen}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>{props.button} Green Color</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-primary`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleblue}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>{props.button} Blue Color</strong>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  name: PropTypes.string,
  /*isRequired to compoulsory a element*/
};
/*Navbar.defaultProps = {
    name:'Stranger'
  };*/
//props.mode==="light"?"dark":"light"