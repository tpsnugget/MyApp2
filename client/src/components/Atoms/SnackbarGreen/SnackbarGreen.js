import React from "react"
import "./SnackbarGreen.css"

export const SnackbarGreen = ({ msg }) => {

      return(
         <div className="SnackbarGreen">
            <p className="SnackbarGreen-p">{msg}</p>
         </div>
      )
}