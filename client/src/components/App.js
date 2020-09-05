import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import NotFound from "./NotFound";
import "./App.css";
import UserDashboard from "./dashboards/UserDashboard";
import AdminDashboard from "./dashboards/AdminDashboard";
import WholesaleDashboard from "./dashboards/WholesaleDashboard";
import AdminRoute from "./AdminRoute";
import WholesaleRoute from "./WholesaleRoute";
import UserRoute from "./UserRoute";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <UserRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <WholesaleRoute
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
