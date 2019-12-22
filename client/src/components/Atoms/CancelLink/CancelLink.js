import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./CancelLink.css"

class CancelLink extends Component {

   render() {
      return (
         <div className="CancelLink-div">
            <Link to="/landing" className="CancelLink-link">
               <button className="CancelLink-button">
                  Cancel
               </button>
            </Link>
         </div>
      )
   }
}

export default CancelLink