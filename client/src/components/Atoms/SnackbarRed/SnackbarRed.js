import React, { Component } from "react"
import "./SnackbarRed.css"

class SnackbarRed extends Component{

   render(){

      return(
         <div className="SnackbarRed">
            <p className="SnackbarRed-p">{this.props.msg}</p>
         </div>
      )
   }
}

export default SnackbarRed