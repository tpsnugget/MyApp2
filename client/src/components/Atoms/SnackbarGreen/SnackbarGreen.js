import React, { Component } from "react"
import "./SnackbarGreen.css"

class SnackbarGreen extends Component{

   render(){

      return(
         <div className="SnackbarGreen">
            <p className="SnackbarGreen-p">{this.props.msg}</p>
         </div>
      )
   }
}

export default SnackbarGreen