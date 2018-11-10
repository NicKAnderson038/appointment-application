import React from "react";
import { connect } from "react-redux";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import * as actionCreators from "../store/actionKeys/actionCreators";

const date = {
  color: "red"
};

const datepickerResult = props => {
  return (
    <div>
      <DayPicker onDayClick={props.onShowDatePickerResult} />
      {props.dateResult ? (
        <p>
          Date Selected <span style={date}>{props.dateResult}</span>
        </p>
      ) : (
        <p>Please select a day.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dateResult: state.datePickerResult.dateResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowDatePickerResult: ingName =>
      dispatch(actionCreators.showDatePickerResult(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(datepickerResult);
