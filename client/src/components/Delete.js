import React, { Component } from "react"
import { Redirect } from "react-router-dom"
// import PropTypes from "prop-types"
// import axios from "axios"

class BeerDelete extends Component{

   // static propTypes = {
   //    /* name (Beer) is passed down from Beer.js to Mininavbar to here */
   //    name: PropTypes.string,

   //    /* Passed down from Beer.js to Mininavbar to here */
   //    chosenId: PropTypes.string
   // }

   render(){

      // const { name } = this.props
      
      return(
         <div>
            {/* <Redirect to={name.toLowerCase()} /> */}
            <Redirect to="/landing" />
         </div>
      )
   }
}

export default BeerDelete