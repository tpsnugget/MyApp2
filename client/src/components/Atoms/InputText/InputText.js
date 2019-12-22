import React, { Component } from "react"
import PropTypes from "prop-types"
import "./InputText.css"

class InputText extends Component {

   static propTypes = {
      /* input type = text, password, ... */
      type: PropTypes.string,

      /* name is from the Parent state */
      name: PropTypes.string,

      /* label is what is displayed on top of the input box for the user */
      label: PropTypes.string,

      /* placeholder is what is displayed inside of the textarea input box for the user */
      placeholder: PropTypes.string
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

      const { type, name, label, placeholder } = this.props

      return (
         // <label className={className}><span className={spanClassName}>{label}</span>
         <label className="InputText-label"><span className="InputText-span">{label}</span>
            <div>
               <input
                  type={type}
                  name={name}
                  // className={inputClassName}
                  className="InputText-input"
                  placeholder={placeholder}
                  onChange={this.handleChangeHere}
               />
            </div>
         </label>
      )
   }
}

export default InputText