import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreators";
import classes from "./submitDate.module.css";

const submitDate = props => {
  const button =
    props.dateResult !== undefined && props.timesRemaining.length > 0 ? (
      <div>
        <button className={classes.activebtn} onClick={() => props.onSubmit()}>
          Submit
        </button>
      </div>
    ) : (
      <div>
        <button className={classes.inactivebtn} disabled>
          Submit
        </button>
      </div>
    );

  return <div>{button}</div>;
};

const mapStateToProps = state => {
  return {
    dateResult: state.datePickerResult.dateResult,
    timesRemaining: state.datePickerResult.timesRemaining
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ingName => dispatch(actionCreators.submit(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(submitDate);
