import {
  FIND_DRIVER,
  FIND_ONE_DRIVER,
  FIND_DRIVERS_BY_ID,
  CLEAR_DRIVER_BY_ID,
  MESSAGE_FROM_CREATE,
  GET_ALL_TEAMS,
  BACK_TO_PAGE_ONE,
} from "./actiontype";
import axios from "axios";

export const findAllDriver = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/drivers");
    return dispatch({
      type: FIND_DRIVER,
      payload: response.data,
    });
  };
};

export const findOneDriver = (value) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/drivers", {
        params: {
          forename: value,
        },
      });
      return dispatch({
        type: FIND_ONE_DRIVER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
    }
  };
};

export const findDriverById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      return dispatch({
        type: FIND_DRIVERS_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
    }
  };
};

export const clearDriverById = () => {
  return (dispatch) => {
    return dispatch({
      type: CLEAR_DRIVER_BY_ID,
      payload: [],
    });
  };
};

export const createNewDriver = (driver) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/drivers",
        driver
      );
      return dispatch({
        type: MESSAGE_FROM_CREATE,
        payload: response.data,
      });
    } catch (error) {
      const errorMessage = error.response.data.error;
      return dispatch({
        type: MESSAGE_FROM_CREATE,
        payload: errorMessage,
      });
    }
  };
};

export const getAllTeams = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/team");
    return dispatch({
      type: GET_ALL_TEAMS,
      payload: response.data,
    });
  };
};

export const upDateDriver = (driver, id) => {
  return async (dispatch) => {
    const response = await axios.put(
      `http://localhost:3001/drivers/${id}`,
      driver
    );
    return dispatch({
      type: MESSAGE_FROM_CREATE,
      payload: response.data,
    });
  };
};

export const backToBegin = () => {
  return (dispatch) => {
    return dispatch({
      type: BACK_TO_PAGE_ONE,
      payload: 1,
    });
  };
};
