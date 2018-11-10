import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreators";
import classes from "./pastDaySelected.module.css";

const error = {
  backgroundColor: "red"
};
const success = {
  backgroundColor: "green"
};
const warning = {
  backgroundColor: "orange"
};

const pastDaySelected = props => {
  if (props.pastDaysSelectedFlag === "error") {
    props.onRestoreDaysSelectedFlag();
    return (
      <div className={classes.backdrop}>
        <div style={error} className={classes.body}>
          <h2
            className={classes.closebtn}
            onClick={() => props.onRestoreDaysSelectedFlagManual()}
          >
            X
          </h2>
          <h1>Please Select a Future Date</h1>
        </div>
      </div>
    );
  } else if (props.pastDaysSelectedFlag === "success") {
    props.onRestoreDaysSelectedFlag();
    return (
      <div className={classes.backdrop}>
        <div style={success} className={classes.body}>
          <h2
            className={classes.closebtn}
            onClick={() => props.onRestoreDaysSelectedFlagManual()}
          >
            X
          </h2>
          <h1>Appoitment Successfully Booked!</h1>
        </div>
      </div>
    );
  } else if (props.pastDaysSelectedFlag === "warning") {
    props.onRestoreDaysSelectedFlag();
    return (
      <div className={classes.backdrop}>
        <div style={warning} className={classes.body}>
          <h2
            className={classes.closebtn}
            onClick={() => props.onRestoreDaysSelectedFlagManual()}
          >
            X
          </h2>
          <h1>Appointment Scheduling Conflict</h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    pastDaysSelectedFlag: state.datePickerResult.pastDaysSelectedFlag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRestoreDaysSelectedFlag: ingName =>
      dispatch(actionCreators.restoreDaysSelectedFlag(ingName)),
    onRestoreDaysSelectedFlagManual: ingName =>
      dispatch(actionCreators.restoreDaysSelectedFlagManual(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pastDaySelected);
