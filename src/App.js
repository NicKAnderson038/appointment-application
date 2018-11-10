import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import DatePick from "./views/DatePick";
import AppointmentList from "./views/AppointmentList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="link" to="/">
            Date Pick
          </Link>
          <Link className="link" to="/my-appointments">
            Appointments
          </Link>
        </header>
        <main>
          <Route exact path="/" component={DatePick} />
          <Route exact path="/my-appointments" component={AppointmentList} />
        </main>
      </div>
    );
  }
}

export default App;
