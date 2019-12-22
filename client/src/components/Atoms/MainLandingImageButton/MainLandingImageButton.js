import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./MainLandingImageButton.css"

class MainLandingImageButton extends Component{

   static propTypes = {
      /* Label for above the image, and for the alt attribute */
      label: PropTypes.string,
      /* image location */
      src: PropTypes.string
   }

   render(){

      const path = `/${this.props.label}`

      const { label, src } = this.props

      return(
         <div className="Landing-button">
            <p className="Landing-title">{label}</p>
            <Link to={path}>
               <img
                  className="Landing-img"
                  src={src}
                  alt={label} />
            </Link>
         </div>
      )
   }
}

export default MainLandingImageButton