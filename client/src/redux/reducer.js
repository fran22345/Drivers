import {
  FIND_DRIVER,
  FIND_ONE_DRIVER,
  FIND_DRIVERS_BY_ID,
  CLEAR_DRIVER_BY_ID,
  MESSAGE_FROM_CREATE,
  GET_ALL_TEAMS,
  BACK_TO_PAGE_ONE,
} from "./actiontype";

const initialState = {
  allDrivers: [],
  driverById: [],
  messageFromCreate: [],
  allTeams: [],
  backToBegin: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_DRIVER:
      return { ...state, allDrivers: action.payload };
    case FIND_ONE_DRIVER:
      return { ...state, allDrivers: action.payload };
    case FIND_DRIVERS_BY_ID:
      return { ...state, driverById: action.payload };
    case CLEAR_DRIVER_BY_ID:
      return { ...state, driverById: action.payload };
    case MESSAGE_FROM_CREATE:
      return { ...state, messageFromCreate: action.payload };
    case GET_ALL_TEAMS:
      return { ...state, allTeams: action.payload };
    case BACK_TO_PAGE_ONE:
      return { ...state, backToBegin: action.payload };
    default:
      return state;
  }
};

export default reducer;
