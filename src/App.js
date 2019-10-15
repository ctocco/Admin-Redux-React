import React from "react";
import UserForm from "../src/components/UserForm";
import { Router, Link } from "@reach/router";
import ShowUsers from "../src/components/ShowUsers";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Admin</Link> | <Link to="/showUsers">Show Users</Link>
      </nav>
      <Router>
        <UserForm path="/" />
        <ShowUsers path="/showUsers" />
      </Router>
    </div>
  );
};

export default App;
