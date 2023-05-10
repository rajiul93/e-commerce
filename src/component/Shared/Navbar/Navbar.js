import React from "react";
import { NavLink } from "react-router-dom";
import product from "../../../Data/ProductData.json";
import UseAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo.png';
import { getStoredCart } from "../../utilities/utilitiesDtb";
import './Navbar.css';


function Navbar() {
  let savedCart = getStoredCart().cart
  let cart = [];
  for (let key in savedCart) {
    cart.push({
      ...product.find(pd => pd.id === key),
      quantity: savedCart[key]

    })
  }

  const { user } = UseAuth()
  return (

    <nav style={{ backgroundColor: "white" }} className="sticky-top navbar navbar-expand-lg  customize-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} width="50" alt="logo" /> Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "red" : ""
              };
            }} className="nav-link" to="/">Home</NavLink>

            <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "red" : ""
              };
            }} className="nav-link" to="/product">Product</NavLink>
            {/*cart start  */}
            {
              cart.length > 0 ?
                <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : ""
                  };
                }} className="nav-link" to="/Cart">Cart <sup style={{ color: 'green' }}>{cart.reduce((a, b) => { return a + b.quantity }, 0)}</sup>
                </NavLink>
                : <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : ""
                  };
                }} className="nav-link" to="/Cart">Cart
                </NavLink>
            }
            {/* cart end */}
            {
              !user.email &&
              <NavLink style={({ isActive }) => {
                return {
                  color: isActive ? "red" : ""
                };
              }} className="nav-link" to="/login">LogIn</NavLink>
            }
            {
              user.email &&
              <NavLink style={({ isActive }) => {
                return {
                  color: isActive ? "red" : ""
                };
              }} className="nav-link" to="/profile">Profile</NavLink>
            }

            {/* {
              user.email && <NavLink style={({ isActive }) => {
                return {
                  color: isActive ? "red" : ""
                };
              }} className="nav-link" to="/dashboard">Dashboard</NavLink>
            } */}




          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar;