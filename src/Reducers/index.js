import {
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  INCREMENT,
  DISPLAY_ATTACK,
  FILTER_RESULTS
} from '../Constants'

function mainReducer (state = {}, action) {
  switch (action.type) {
    case DATA_FETCHED: {
      return {
        data: action.payload.data,
        success: true
      }
    }
    case DATA_FETCH_ERROR: {
      return {
        logging: false,
        loggedin: true,
        data: action.payload.data
      }
    }
    case INCREMENT: {
      state.attackCounter += 1
      return
    }
    case DISPLAY_ATTACK: {
      return {
        display: true,
        attack: action.payload.row,
        data: action.data
      }
    }
    case FILTER_RESULTS: {
      return {
        data: action.data,
        rows: action.rows
      }
    }
    default:
      return state
  }
}
export { mainReducer }
