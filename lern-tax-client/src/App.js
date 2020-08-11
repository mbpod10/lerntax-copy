import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");

  const handleLogin = (data) => {
    setLoggedIn("LOGGED_IN");
    setUser(data.user);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      axios
        .get("http://localhost:3000/logged_in", { withCredentials: true })
        .then((response) => {
          //console.log("logged in?", response);
          if (response.data.logged_in && loggedIn === "NOT_LOGGED_IN") {
            setLoggedIn("LOGGED_IN");
            setUser(response.data.user);
            setEmail(response.data.user.email);
          } else if (!response.data.logged_in && loggedIn === "LOGGED_IN") {
            setLoggedIn("NOT_LOGGED_IN");
            setUser({});
          }
        })
        .catch((error) => {
          console.log("log in error", error);
        });
    };
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    setLoggedIn("NOT_LOGGED_IN");
    setUser({});
  };
  console.log(email);

  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="top"
      >
        <ReactBootStrap.Navbar.Brand href="/"></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link className="nav-link" to="/basics">
              Tax Basics
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <Switch>
        <>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                email={email}
                user={user}
                loggedInStatus={loggedIn}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            )}
          />
        </>
      </Switch>
    </div>
  );
}

export default App;
