import React from 'react'
import PropTypes from 'prop-types'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>{props.name}</a>
    <a className="navbar-brand">{props.home}</a>
    <a className="navbar-brand">{props.about}</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes = {
    name: PropTypes.string
    /*isRequired to compoulsory a element*/
  };
/*Navbar.defaultProps = {
    name:'Stranger'
  };*/
  