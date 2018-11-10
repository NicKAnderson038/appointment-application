import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreators";

const timeFilter = props => {
  const handleSelect = event => {
    props.onTimeFilter(event.target.value);
  };
  let startTime;
  if (props.timeStart === "") {
    startTime = <h4>Select Start Time</h4>;
  } else {
    startTime = <h4>Start Time: {props.timeStart}</h4>;
  }

  return (
    <div>
      {startTime}
      <select onChange={event => handleSelect(event)}>
        {props.timeChoices.map((date, i) => {
          return props.timeChoices.length - 1 !== i ? (
            <option value={date} key={i + "-" + date}>
              {date}
            </option>
          ) : null;
        })}
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timeChoices: state.datePickerResult.timeChoices,
    timeStart: state.datePickerResult.timeStart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTimeFilter: ingName => dispatch(actionCreators.timeFilter(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(timeFilter);
