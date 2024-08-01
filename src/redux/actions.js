import {
  GET_FORECAST
} from "./actionsTypes";
import axios from "axios";
import {API_KEY} from "../../config"

export const getForecast = (site) => {
  const endPoint = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${site}&lang=es&days=7`;
  
  return async (dispatch) => {
    try {
      const {data} = await axios(endPoint)
      if(!data) throw Error ("no forecast found");
      
      return dispatch ({
        type: GET_FORECAST,
        payload: data
      })
    } catch (error) {
        return error.message;      
    }
  }
}