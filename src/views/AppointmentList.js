import React, { Component } from "react";
// import classes from "./DatePick.module.css";
import MyAppointments from "../components/myAppointments";

class AppointmentList extends Component {
  render() {
    return (
      <React.Fragment>
        <MyAppointments />
      </React.Fragment>
    );
  }
}

export default AppointmentList;
