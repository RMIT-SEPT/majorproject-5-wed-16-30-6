import {
    POST_BOOKING_SUCCESS, POST_BOOKING_FAILURE
  } from '../actions/bookingActions'
  
  const initalState = {
    booked: false
  }
  
  const bookingReducer = (state = [initalState], action) => {
    switch (action.type) {
      case POST_BOOKING_SUCCESS:
        return [
          ...state,
          {
            lastUpdated: action.receivedAt,
            booking: action.booking,
            booked: true
          }
        ]
      case POST_BOOKING_FAILURE:
        return [
          ...state,
          {
            errorMsg: action.errorMsg,
            error: action.error,
            booked: false
          }
        ]
      default:
        return state
    }
  }
  
  export default bookingReducer;