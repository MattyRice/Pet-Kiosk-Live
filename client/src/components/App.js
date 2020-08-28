import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import NotFound from "./NotFound";
import "./App.css";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import WholesaleDashboard from "./WholesaleDashboard";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/user/dashboard" component={UserDashboard} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route
          exact
          path="/wholesale/dashboard"
          component={WholesaleDashboard}
        />

        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
