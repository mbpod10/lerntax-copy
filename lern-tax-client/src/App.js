import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import APIConfig from "./APIConfig";
import { Switch, Route, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import EditInformation from "./components/EditInformation";
import TaxList from "./statics/TaxList";
import GrossTaxableIncome from "./statics/GrossTaxableIncome";
import AGI from "./statics/AGI";
import ItemizedDeductions from "./statics/ItemizedDeductions";
import StandardDeductions from "./statics/StandardDeduction";
import CalcTax from "./components/CalcTax";
import TaxInfo from "./components/TaxInfo";

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
        .get(`${APIConfig}/logged_in`, { withCredentials: true })
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
  //console.log(email);

  const handleLogoutClick = () => {
    axios
      .delete(`${APIConfig}/logout`, { withCredentials: true })
      .then((response) => {
        //console.log("logout", response);
        handleLogout();
        window.location.reload();
        //props.history.push("/");
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  return (
    <div className="App">
      <ReactBootStrap.Jumbotron fluid>
        <ReactBootStrap.Container>
          <h1>Lern Tax</h1>
          <p>Where We Make Taxes Easy To Understand</p>
        </ReactBootStrap.Container>
      </ReactBootStrap.Jumbotron>
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
            <Link className="nav-link" to="/about">
              LernTax
            </Link>
            <Link className="nav-link" to="/tax-basics">
              Tax Basics
            </Link>
            <Link className="nav-link" to="/calc-tax">
              Calc
            </Link>
            {loggedIn === "LOGGED_IN" ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link" to={`/profile/${user.id}`}>
                  Profile
                </Link>
              </>
            ) : null}
          </ReactBootStrap.Nav>
          {loggedIn === "LOGGED_IN" ? (
            <>
              <Link className="nav-link" to="/">
                {email}
              </Link>
              <Link
                className="nav-link"
                onClick={() => handleLogoutClick()}
                to="/"
              >
                Logout
              </Link>
            </>
          ) : (
            <ReactBootStrap.Nav>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </ReactBootStrap.Nav>
          )}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <Switch>
        <React.Fragment>
          <main>
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
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  {...props}
                  user={user}
                  email={email}
                  loggedInStatus={loggedIn}
                  handleLogin={handleLogin}
                />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  user={user}
                  email={email}
                  loggedInStatus={loggedIn}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              path="/profile/:id"
              render={(props) => (
                <Profile
                  {...props}
                  user={user}
                  email={email}
                  loggedInStatus={loggedIn}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              path="/information/:id"
              render={(props) => (
                <EditInformation
                  {...props}
                  user={user}
                  email={email}
                  loggedInStatus={loggedIn}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              path="/about"
              render={(props) => (
                <About
                  {...props}
                  user={user}
                  email={email}
                  loggedInStatus={loggedIn}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route
              path="/tax-information/:id"
              render={(props) => (
                <TaxInfo
                  {...props}
                  user={user}
                  email={email}
                  loggedInStatus={loggedIn}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                />
              )}
            />
            <Route path="/calc-tax" component={CalcTax} />
            <Route path="/tax-basics" component={TaxList} />
            <Route
              path="/gross-taxable-income"
              component={GrossTaxableIncome}
            />
            <Route path="/adjustable-gross-income" component={AGI} />
            <Route path="/itemized-deductions" component={ItemizedDeductions} />
            <Route path="/standard-deduction" component={StandardDeductions} />
          </main>
        </React.Fragment>
      </Switch>
    </div>
  );
}

export default App;
