import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"

class Delete extends Component{

   constructor(props){
      super(props)
      this.state = {
         goodDelete: false
      }
   }

   componentDidMount(){

      const { type, id } = this.props.location.state

      const url = `http://localhost:9000/${type.toLowerCase()}`

      axios.delete(url, {
         params: {
            _id: id
         }
      })
         .then((response) => {
            if (response.data.name === "MongoError") {
               this.setState({
                  snackBarOpen: true,
                  msg: "Delete was not successfull"
               })
            } else {
               this.setState({
                  snackBarOpen: true,
                  msg: "Delete was successful",
                  goodDelete: true
               })
               setTimeout(() => {
                  this.setState({
                     snackBarOpen: false,
                     msg: "",
                     goodDelete: false,
                  })
               }, 2500);
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      const { goodDelete } = this.state
      const { type, id } = this.props.location.state

      const path = `/${type.toLowerCase()}`
      
      return(
         <div>
            {goodDelete && <Redirect to={path} />}
            <h2>Type: {type}</h2>
            <h2>Id: {id}</h2>
         </div>
      )
   }
}

export default Delete