import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import User from "./components/User"
import Login from "./components/Login"
import Delete from "./components/Delete"
import Beer from "./components/sections/beer/components/Beer"
import BeerNew from "./components/sections/beer/components/BeerNew"
import Recipe from "./components/sections/recipe/components/Recipe"
import RecipeNew from "./components/sections/recipe/components/RecipeNew"
import Restaurant from "./components/sections/restaurant/components/Restaurant"
import RestaurantNew from "./components/sections/restaurant/components/RestaurantNew"
import RV from "./components/sections/rv/components/RV"
import RVNew from "./components/sections/rv/components/RVNew"
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      isLoggedIn: false,
      loggedInName: ""
    })
    this.updateLoggedInName = this.updateLoggedInName.bind(this)
    this.logout = this.logout.bind(this)
  }

  updateLoggedInName(e) {
    this.setState({
      isLoggedIn: true,
      loggedInName: e
    })
  }

  logout() {
    this.setState({ isLoggedIn: false })
  }

  render() {

    const { isLoggedIn, loggedInName } = this.state

    return (
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} loggedInName={loggedInName} logout={this.logout} />
        <Switch>
          
          <Route exact path="/landing">
            {isLoggedIn && <Landing />} 
          </Route>
          <Route exact path="/login">
            <Login updateLoggedInName={this.updateLoggedInName} />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/delete" component={Delete}>
          </Route>

          <Route exact path="/beer">
            {isLoggedIn && <Beer name="Beer" loggedInName={loggedInName}/>}
          </Route>
          <Route exact path="/beer/new">
            {isLoggedIn && <BeerNew username={loggedInName}/>}
          </Route>
          {/* <Route exact path="/beer/delete">
            {isLoggedIn && <BeerDelete />}
          </Route> */}


          <Route exact path="/recipe">
            {isLoggedIn && <Recipe name="Recipe" loggedInName={loggedInName}/>}
          </Route>
          <Route exact path="/recipe/new">
            {isLoggedIn && <RecipeNew username={loggedInName}/>}
          </Route>

          <Route exact path="/restaurant">
            {isLoggedIn && <Restaurant name="Restaurant" loggedInName={loggedInName}/>}
          </Route>
          <Route exact path="/restaurant/new">
            {isLoggedIn && <RestaurantNew username={loggedInName}/>}
          </Route>

          <Route exact path="/rv">
            {isLoggedIn && <RV name="RV" loggedInName={loggedInName}/>}
          </Route>
          <Route exact path="/rv/new">
            {isLoggedIn && <RVNew username={loggedInName}/>}
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
