import * as actionTypes from "../actionKeys/actionTypes";

export const showDatePickerResult = val => {
  return {
    type: actionTypes.DATE_RESULT,
    dateResult: val
  };
};

export const timeFilter = val => {
  return {
    type: actionTypes.TIME_FILTER,
    timeResult: val
  };
};

export const timeEnd = val => {
  return {
    type: actionTypes.TIME_END,
    timeResult: val
  };
};

export const submit = val => {
  return {
    type: actionTypes.SUBMIT
  };
};

const helper = () => {
  return {
    type: actionTypes.RESTORE_DAY_SELECTED_FLAG
  };
};

export const restoreDaysSelectedFlag = val => {
  return dispatch => {
    setTimeout(() => {
      dispatch(helper());
    }, 5000);
  };
};

export const restoreDaysSelectedFlagManual = val => {
  return {
    type: actionTypes.RESTORE_DAY_SELECTED_FLAG
  };
};

const networkHelper = val => {
  return {
    type: actionTypes.NETWORK_CHECK,
    timeResult: val
  };
};

export const networkCheck = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(() => {
        dispatch(networkHelper(true));
      })
      .catch(error => {
        dispatch(networkHelper(false));
        console.error(error);
      });
  };
};
