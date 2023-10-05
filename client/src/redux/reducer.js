import {
  FIND_DRIVER,
  FIND_ONE_DRIVER,
  FIND_DRIVERS_BY_ID,
  CLEAR_DRIVER_BY_ID,
} from "./actiontype";

const initialState = {
  allDrivers: [],
  driverById: [],
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
      return {...state, driverById: action.payload };
    default:
      return state;
  }
};

export default reducer;
