import {
  FIND_DRIVER,
  FIND_ONE_DRIVER,
  FIND_DRIVERS_BY_ID,
  CLEAR_DRIVER_BY_ID,
  MESSAGE_FROM_CREATE,
  GET_ALL_TEAMS,
} from "./actiontype";

const initialState = {
  allDrivers: [],
  driverById: [],
  messageFromCreate: [],
  allTeams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_DRIVER:
      return { ...state, allDrivers: action.payload };
    case FIND_ONE_DRIVER:
      // Actualiza allDrivers solo si es necesario
      return action.payload.length > 0
        ? { ...state, allDrivers: action.payload }
        : state;
    case FIND_DRIVERS_BY_ID:
      return { ...state, driverById: action.payload };
    case CLEAR_DRIVER_BY_ID:
      return { ...state, driverById: action.payload };
    case MESSAGE_FROM_CREATE:
      return { ...state, messageFromCreate: action.payload };
    case GET_ALL_TEAMS:
      return { ...state, allTeams: action.payload };
    default:
      return state;
  }
};

export default reducer;
