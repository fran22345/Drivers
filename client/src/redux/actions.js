import { FIND_DRIVER, FIND_ONE_DRIVER,FIND_DRIVERS_BY_ID, CLEAR_DRIVER_BY_ID } from "./actiontype";
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
      // Manejar el error aquí si es necesario
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
      // Manejar el error aquí si es necesario
      console.error("Error en la solicitud GET:", error);
    }
  };
};

export const clearDriverById = ()=>{
  return (dispatch) =>{
    return dispatch({
      type: CLEAR_DRIVER_BY_ID,
      payload: []
    })
  }
}