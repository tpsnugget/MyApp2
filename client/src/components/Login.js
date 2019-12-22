import React, { Component, Fragment } from "react"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import SnackbarGreen from "./Atoms/SnackbarGreen/SnackbarGreen"
import SnackbarRed from "./Atoms/SnackbarRed/SnackbarRed"
import InputText from "./Atoms/InputText/InputText"
import Button from "./Atoms/Button/Button"
import axios from "axios"
import "../css/Login.css"

class Login extends Component {

   static propTypes = {
      /* Function passed down from App.js, pass logged in username back to App.js
         to be added to state */
      updateLoggedInName: PropTypes.func
   }

   constructor(props) {
      super(props)
      this.state = {
         username: "",
         password: "",
         snackBarGreenOpen: false,
         snackBarRedOpen: false,
         msg: "",
         goodLogin: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()

      axios.get("http://localhost:9000/users", {
         params: {
            username: this.state.username.toLowerCase()
         }
      })
         .then((response) => {

            if (response.data._id) {
               if (response.data.password === this.state.password) {
                  this.setState({
                     snackBarGreenOpen: true,
                     msg: "Login was successful"
                  })
                  setTimeout(() => {
                     this.props.updateLoggedInName(this.state.username.toLowerCase())
                     this.setState({
                        snackBarGreenOpen: false,
                        msg: "",
                        goodLogin: true
                     })
                  }, 2000);
               }
               else {
                  this.setState({
                     snackBarRedOpen: true,
                     msg: "Login not successful"
                  })
                  setTimeout(() => {
                     this.setState({
                        snackBarRedOpen: false,
                        msg: ""
                     })
                  }, 2000);
               }
            }
            else if (response.data === "") {
               this.setState({
                  snackBarRedOpen: true,
                  msg: "Login not successful"
               })
               setTimeout(() => {
                  this.setState({
                     snackBarRedOpen: false,
                     msg: ""
                  })
               }, 2000);
            }

         })
         .catch((error) => {
            console.error("Login Component received error: ", error)
         })
   }

   render() {

      const { snackBarGreenOpen, snackBarRedOpen, goodLogin } = this.state

      return (
         <Fragment>
            {goodLogin && <Redirect to="/landing" />}
            <div className="Login">
               <div className="Login-header">
                  <h4 className="Login-header-h4">Login</h4>
               </div>
               <div className="Login-main-div">
                  <form action="" method="get" onSubmit={this.handleSubmit}>

                     <div className="Login-row">
                        <InputText type="text" label="Username:" name="username" placeholder="Username" handleChange={this.handleChange}/>
                        <InputText type="password" label="Password:" name="password" placeholder="Password" handleChange={this.handleChange}/>                   
                     </div>

                     <Button label="Submit" />
                  </form>
               </div>
            </div>
            {snackBarGreenOpen && <SnackbarGreen msg={this.state.msg} />}
            {snackBarRedOpen && <SnackbarRed msg={this.state.msg} />}
         </Fragment>
      )
   }
}

export default Login