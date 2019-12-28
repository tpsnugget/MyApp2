import React from "react"
import "./SnackbarRed.css"

export const SnackbarRed = ( { msg }) => {

      return(
         <div className="SnackbarRed">
            <p className="SnackbarRed-p">{msg}</p>
         </div>
      )
}