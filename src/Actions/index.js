import Axios from 'axios'
import { DATA_FETCHED, DATA_FETCH_ERROR, INCREMENT } from '../Constants'

const FetchDataFromDB = () => async dispatch => {
  try {
    const response = await Axios.get('http://localhost:5000/fetchdata')
    if (response.data) dispatch({ type: DATA_FETCHED, payload: response.data })
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR, payload: error })
  }
}


export {FetchDataFromDB};