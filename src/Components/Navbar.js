import React,{useState} from "react";
import PropTypes from "prop-types";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [checkedSwitch, setCheckedSwitch] = useState(null);
  const handleSwitchChange = (switchId) => {
    setCheckedSwitch(prevCheckedSwitch => prevCheckedSwitch === switchId ? null : switchId);
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.name}
          </Link>
          <Link className="navbar-brand" to="/">{props.home}</Link>
          <Link className="navbar-brand" to="/about">{props.about}</Link>
          {/*<form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
          <div className={`form-check form-switch text-light`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault1"
              onClick={props.toggledark}
              checked={checkedSwitch === 1}
              onChange={() => handleSwitchChange(1)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault1"
            >
              <strong>{`${checkedSwitch===1?"Disable":"Enable"}`} Dark Mode</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-danger`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault2"
              onClick={props.togglered}
              checked={checkedSwitch === 2}
              onChange={() => handleSwitchChange(2)}
              
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault2"
            >
              <strong>{`${checkedSwitch===2?"Disable":"Enable"}`} Red Color</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-warning`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault3"
              onClick={props.toggleyellow}
              checked={checkedSwitch === 3}
              onChange={() => handleSwitchChange(3)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault3"
            >
              <strong>{`${checkedSwitch===3?"Disable":"Enable"}`} Yellow Color</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-success`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault4"
              onClick={props.togglegreen}
              checked={checkedSwitch === 4}
              onChange={() => handleSwitchChange(4)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault4"
            >
              <strong>{`${checkedSwitch===4?"Disable":"Enable"}`} Green Color</strong>
            </label>
          </div>
          <div className={`form-check form-switch text-primary`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault5"
              onClick={props.toggleblue}
              checked={checkedSwitch === 5}
              onChange={() => handleSwitchChange(5)}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault5"
            >
              <strong>{`${checkedSwitch===5?"Disable":"Enable"}`} Blue Color</strong>
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