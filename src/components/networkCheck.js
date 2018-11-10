import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionKeys/actionCreators";
import classes from "./networkCheck.module.css";

const info = {
  backgroundColor: "blue"
};

const networkCheck = props => {
  props.onNetworkCheck();
  if (!props.networkActive) {
    return (
      <div className={classes.backdrop}>
        <div style={info} className={classes.body}>
          <h2
            className={classes.closebtn}
            onClick={() => props.onNetworkCheck()}
          >
            X
          </h2>
          <h1>Check Network Connection</h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    networkActive: state.datePickerResult.networkActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNetworkCheck: ingName => dispatch(actionCreators.networkCheck(ingName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(networkCheck);
