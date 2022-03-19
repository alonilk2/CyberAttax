import Axios from 'axios'
import { DATA_FETCHED, DATA_FETCH_ERROR, INCREMENT } from '../Constants'
/**
 * An action function which sends a GET request to fetch attack data from the server.
 * After successful response, the data is then uploaded to a global state variables (using Redux's dispatch)
 * @author Alon Barenboim
 */
const FetchDataFromDB = () => async dispatch => {
  try {
    const response = await Axios.get('http://localhost:5000/fetchdata')
    if (response.data) dispatch({ type: DATA_FETCHED, payload: response.data })
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR, payload: error })
  }
}

export {FetchDataFromDB};