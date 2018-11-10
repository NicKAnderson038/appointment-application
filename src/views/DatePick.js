import React, { Component } from "react";
// import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import classes from "./DatePick.module.css";

import DatePickerResult from "../components/datePickerResult";
import TimeFilter from "../components/timeFilter";
import TimeEnd from "../components/timeEnd";
import SubmitDate from "../components/submitDate";
import PastDaySelected from "../components/pastDaySelected";
import NetworkCheck from "../components/networkCheck";

class DatePick extends Component {
  render() {
    return (
      <React.Fragment>
        <NetworkCheck />
        <PastDaySelected />
        <DatePickerResult />
        <div className={classes.main}>
          <div className={classes.box}>
            <TimeFilter />
          </div>
          <div className={classes.box}>
            <TimeEnd />
          </div>
        </div>
        <br />
        {/* <pre className={classes.footer}>
          Time Ranges default with-in an hour
        </pre> */}
        <SubmitDate />
      </React.Fragment>
    );
  }
}

export default DatePick;
