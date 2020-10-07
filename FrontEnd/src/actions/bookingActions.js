import axios from 'axios'

export const POST_BOOKING_SUCCESS = 'POST_BOOKING_SUCCESS'
const postBookingSuccess = (json) => {
  return {
    type: POST_BOOKING_SUCCESS,
    booking: json,
    receivedAt: Date.now()
  }
}

export const POST_BOOKING_FAILURE = 'POST_BOOKING_FAILURE'
const postBookingFailure = (error) => ({
  type: POST_BOOKING_FAILURE,
  // errorMsg: error.response.data, TODO: uncommment when api exists
  error
})

export const bookService = (custId, scheduleId) => {
  return (dispatch) => {
    
    const data = {
      "id": scheduleId,
      "custId": custId,
    }
    
    // TODO: api
    const url = 'http://localhost:8080/api/';
    return axios.post(url, data)
      .then(res => {
        console.log(res);
        dispatch(postBookingSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(postBookingFailure(err))
      })
  }
}
