import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Button.css"

class Button extends Component{

   static propTypes = {
      /* Text used for the face of the button */
      label: PropTypes.string
   }

   render(){

      const { label } = this.props

      return(
         <button className="Button-button">{label}</button>
      )
   }
}

export default Button