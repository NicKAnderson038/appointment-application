import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";

const initialState = {
  dateResult: undefined,
  timeChoices: [
    "8am",
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm"
  ],
  timeStart: "",
  timesRemaining: [],
  timeEnd: "",
  appointmentList: [],
  md: ["Dr. Dre", "Dr. Who", "Dr. Strange", "Dr. Octopus", "Dr. Octopus"],
  pastDaysSelectedFlag: "",
  networkActive: true
};

const showDatePickerResult = (state, action) => {
  const updatedState = {
    dateResult: action.dateResult.toLocaleDateString()
  };
  return updateObject(state, updatedState);
};

const timeFilter = (state, action) => {
  const timeChoices = [...state.timeChoices];
  const timesRemaining = timeChoices.reduce((acc, val, index) => {
    if (acc === action.timeResult) {
      return timeChoices.splice(index);
    }

    return (acc = val);
  }, []);
  const updatedState = {
    timeStart: action.timeResult,
    timesRemaining: timesRemaining,
    timeEnd: timesRemaining[0]
  };
  return updateObject(state, updatedState);
};

const timeEnd = (state, action) => {
  const updatedState = {
    timeEnd: action.timeResult
  };
  return updateObject(state, updatedState);
};

const dateHelper = dr => {
  let dateFlag;
  let todaysDate = new Date();
  let selectedDate = new Date(dr);

  selectedDate.setHours(0, 0, 0, 0) < todaysDate.setHours(0, 0, 0, 0) ||
  selectedDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
    ? (dateFlag = false)
    : (dateFlag = true);

  return dateFlag;
};

const submit = (state, action) => {
  const dateFlag = dateHelper(state.dateResult);
  if (dateFlag && state.appointmentList.length === 0) {
    let cleanArray = [...state.appointmentList];
    const obj = {
      date: state.dateResult,
      startTime: state.timeStart,
      endTime: state.timeEnd,
      md: state.md[Math.floor(Math.random() * state.md.length)]
    };
    cleanArray.push(obj);
    const updatedState = {
      appointmentList: cleanArray,
      pastDaysSelectedFlag: "success"
    };
    return updateObject(state, updatedState);
  } else if (dateFlag && state.appointmentList.length > 0) {
    let result = false;

    state.appointmentList.map(val => {
      if (val.date === state.dateResult) {
        const start = state.timeChoices.indexOf(val.startTime);
        const end = state.timeChoices.indexOf(val.endTime);
        // console.log(start + " " + val.startTime, end + " " + val.endTime);
        const newStart = state.timeChoices.indexOf(state.timeStart);
        const newEnd = state.timeChoices.indexOf(state.timeEnd);
        // console.log(
        //   newStart + " " + state.timeStart,
        //   newEnd + " " + state.timeEnd
        // );
        if (newStart < start && newEnd > start && newEnd < end) {
          return (result = true);
        } else if (start < newStart && newEnd < end) {
          return (result = true);
        } else if (start < newStart && newStart < end) {
          return (result = true);
        } else if (start > newStart && newEnd > end) {
          return (result = true);
        } else if (start === newStart && newEnd === end) {
          return (result = true);
        }
      }
    });
    if (!result) {
      let cleanArray = [...state.appointmentList];
      const obj = {
        date: state.dateResult,
        startTime: state.timeStart,
        endTime: state.timeEnd,
        md: state.md[Math.floor(Math.random() * state.md.length)]
      };
      cleanArray.push(obj);
      const updatedState = {
        appointmentList: cleanArray,
        pastDaysSelectedFlag: "success"
      };
      return updateObject(state, updatedState);
    } else if (result) {
      const updatedState = {
        pastDaysSelectedFlag: "warning"
      };
      return updateObject(state, updatedState);
    }
  } else {
    const updatedState = {
      pastDaysSelectedFlag: "error"
    };
    return updateObject(state, updatedState);
  }
};

const restoreDaysSelectedFlag = (state, action) => {
  const updatedState = {
    pastDaysSelectedFlag: ""
  };
  return updateObject(state, updatedState);
};

const networkCheck = (state, action) => {
  const updatedState = {
    networkActive: action.timeResult
  };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATE_RESULT:
      return showDatePickerResult(state, action);
    case actionTypes.TIME_FILTER:
      return timeFilter(state, action);
    case actionTypes.TIME_END:
      return timeEnd(state, action);
    case actionTypes.SUBMIT:
      return submit(state, action);
    case actionTypes.RESTORE_DAY_SELECTED_FLAG:
      return restoreDaysSelectedFlag(state, action);
    case actionTypes.NETWORK_CHECK:
      return networkCheck(state, action);
    default:
      return state;
  }
};

export default reducer;
