import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Auth imports
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/adminActions";

// Bring in components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import About from "./components/services/About";
import WebDev from "./components/services/WebDev";
import GameDev from "./components/services/GameDev";
import Contact from "./components/services/Contact";
import Success from "./components/redirects/Success";
import Errors from "./components/redirects/Errors";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import NotFound from "./components/not-found/Not-Found";

import "./App.css";

// Check token
if (localStorage.jwtToken) {
  // Set auth header to token
  setAuthToken(localStorage.jwtToken);

  // Get token information
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set user
  store.dispatch(setCurrentUser(decoded));

  // Check expiry for token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Clear current profile
    store.dispatch(clearCurrentProfile());

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
            <div className="pb-5">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Landing} />

                {/* 
                <Route exact path="/register" component={Register} />
                */}

                <Route exact path="/login" component={Login} />

                <Route exact path="/webdev" component={WebDev} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />

                <PrivateRoute exact path="/dashboard" component={Dashboard} />

                <Route exact path="/gamedev" component={GameDev} />
                <Route exact path="/contact_success" component={Success} />
                <Route exact path="/contact_error" component={Errors} />

                <Route exact component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
