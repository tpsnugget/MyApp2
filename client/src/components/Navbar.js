import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../css/Navbar.css"

export const Navbar = ({ isLoggedIn, loggedInName, logout }) => {

   Navbar.propTypes = {
      /* Passed down from App.js in order to customize the Navbar */
      isLoggedIn: PropTypes.bool,

      /* Used to personalize the Navbar */
      loggedInName: PropTypes.string,

      /* Function passed down from App.js, used in the customized Navbar to
         log a person out if they are logged in */
      logout: PropTypes.func
   }

      const loginSignupLinks =
         <div className="Navbar-right">
            <Link to="/login" className="Navbar-right-links">Login</Link>
            <Link to="/user" className="Navbar-right-links">Signup</Link>
         </div>

      const logoutLink =
         <div className="Navbar-right">
            <Link to="/" className="Navbar-right-links" onClick={logout}>Logout</Link>
         </div>

      return (
         <div className="Navbar">
            <div className="Navbar-left">
               {isLoggedIn ? <span>You are logged in as: {loggedInName} </span> : <span>Please Login or Signup</span>}
            </div>
            {isLoggedIn ? logoutLink : loginSignupLinks}
         </div >
      )
}