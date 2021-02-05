import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Contact from "./components/dashboard/Contact";
import Dashboard from "./components/dashboard/Dashboard";
import Gallery from "./components/dashboard/Gallery";
import Search from "./components/layout/Search";
import MatchForYou from "./components/layout/MatchForYou";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddBasic from "./components/add-credentials/AddBasic";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import AddFamily from "./components/add-credentials/AddFamily";
// import AddFamilyMember from "./components/add-credentials/AddFamilyMember";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

import NotFound from "./components/not-found/NotFound";
import Match from "./components/match/Match";
import { clearCurrentMatch } from "./actions/matchActions";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    //Clear All Match
    store.dispatch(clearCurrentMatch);

    // Redirect to login
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <Route exact path="/profiles" component={Profiles} />
              </Switch>
              <PrivateRoute exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/gallery" component={Gallery} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/contact" component={Contact} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-basic" component={AddBasic} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/your-match"
                  component={MatchForYou}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-family" component={AddFamily} />
              </Switch>
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/add-family-member"
                  component={AddFamilyMember}
                />
              </Switch> */}
              <Switch>
                <PrivateRoute exact path="/search" component={Search} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/match" component={Match} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
