import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreators";

const timeEnd = props => {
  const handleSelect = event => {
    props.onTimeEnd(event.target.value);
  };
  let endTime;
  if (props.timeEnd === "") {
    endTime = <h4>Select End Time</h4>;
  } else {
    endTime = <h4>End Time: {props.timeEnd}</h4>;
  }

  return (
    <div>
      {endTime}
      <select onChange={event => handleSelect(event)}>
        {props.timesRemaining.map((date, i) => {
          return (
            <option value={date} key={i + "-" + date}>
              {date}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timesRemaining: state.datePickerResult.timesRemaining,
    timeEnd: state.datePickerResult.timeEnd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTimeEnd: ingName => dispatch(actionCreators.timeEnd(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(timeEnd);
