import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreators";
import classes from "./myAppointments.module.css";

const myAppointments = props => {
  const run = () => {
    if (props.appointmentList.length > 0) {
      return (
        <div>
          <h4>My Appointments</h4>
          <div className={classes.outter}>
            {props.appointmentList.map((val, i) => {
              return (
                <div
                  className={classes.inner}
                  key={i + "-" + val.startTime + "-" + val.endTime}
                >
                  <h4 className={classes.text}>
                    {i + 1}. DATE: {val.date} TIME: {val.startTime}-
                    {val.endTime} MD: {val.md}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <h3>No Appointments Made</h3>;
    }
  };
  const result = run();
  return <div>{result}</div>;
};

const mapStateToProps = state => {
  return {
    appointmentList: state.datePickerResult.appointmentList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myAppointments);
