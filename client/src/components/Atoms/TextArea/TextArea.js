import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TextArea.css"

class TextArea extends Component {

   static propTypes = {
      /* Sizes the textarea container */
      rows: PropTypes.string,

      /* Sizes the textarea container */
      cols: PropTypes.string,

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string
   }

   constructor(props) {
      super(props)
      this.handleChangeHere = this.handleChangeHere.bind(this)
   }

   handleChangeHere(e) {
      e.preventDefault()
      this.props.handleChange(e)
   }

   render() {

      const { rows, cols, label, placeholder, type, name } = this.props

      return (
         <label className="TextArea-label"><span className="TextArea-span">{label}</span>
            <div>
               <textarea className="TextArea-textarea" rows={rows} cols={cols} placeholder={placeholder} type={type} name={name} onChange={this.handleChangeHere}>

               </textarea>
            </div>
         </label>
      )
   }
}

export default TextArea