import {
    GET_SCHEDULES_REQUEST, GET_SCHEDULES_SUCCESS, GET_SCHEDULES_FAILURE
  } from '../actions'
  
  const initalState = {
    isFetching: false,
    timeslots: []
  }
  
  /**
   * return schedules contents if successful 
  */
  const schedules = (state = [initalState], action) => {    
    switch (action.type) {
      case GET_SCHEDULES_REQUEST:
        return [
          ...state,
          {
            isFetching: true,
            timeslots: []
          }
        ]
      case GET_SCHEDULES_SUCCESS:
        return [
          ...state,
          {
            isFetching: false,
            timeslots: action.schedules,
            workers: action.workers,
            lastUpdated: action.receivedAt
          }
        ]
      case GET_SCHEDULES_FAILURE:
        return [
          ...state,
          {
            isFetching: false,
            error: action.error
          }
        ]
      default:
        return state
    }
  }
  
  export default schedules