import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TextArea.css"

export const TextArea = ({ rows, cols, label, placeholder, type, name, value, handleChange }) => {

   TextArea.propTypes = {
      /* Sizes the textarea container */
      rows: PropTypes.string,

      /* Sizes the textarea container */
      cols: PropTypes.string,

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string
   }

      return (
         <label className="TextArea-label"><span className="TextArea-span">{label}</span>
            <div>
               <textarea className="TextArea-textarea" rows={rows} cols={cols} name={name} placeholder={placeholder} type={type} value={value} onChange={handleChange}>

               </textarea>
            </div>
         </label>
      )
}