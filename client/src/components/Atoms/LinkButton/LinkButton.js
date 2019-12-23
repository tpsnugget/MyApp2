import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./LinkButton.css"

class LinkButton extends Component {

   static defaultProps = {
      chosenId: ""
   }

   static propTypes = {
      /* path for the Link from react-router-dom */
      newPath: PropTypes.string,
      /* label for the button face (left side of the text) */
      label: PropTypes.string,
      /* label for the button face (right side of the text) */
      /* Beer, Recipe, Restaurant, RV */
      name: PropTypes.string,

      /* Passed down from Mininavbar */
      chosenId: PropTypes.string
   }

   render() {

      const { newPath, buttonLabel, name, chosenId } = this.props

      return (
         <div className="LinkButton-div">
            <Link
               // to={newPath}
               to={{
                  pathname: newPath,
                  state: {
                     id: chosenId,
                     type: name      
                  }
               }}
               className="LinkButton-link-new"
            >
               {buttonLabel} {name}
            </Link>
         </div>
      )
   }
}

export default LinkButton