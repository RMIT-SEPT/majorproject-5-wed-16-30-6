import axios from 'axios'

export const POST_BOOKING_SUCCESS = 'POST_BOOKING_SUCCESS'
const postBookingSuccess = (data) => {
  return {
    type: POST_BOOKING_SUCCESS,
    booking: data,
    receivedAt: Date.now()
  }
}

export const POST_BOOKING_FAILURE = 'POST_BOOKING_FAILURE'
const postBookingFailure = (error) => ({
  type: POST_BOOKING_FAILURE,
  errorMsg: error.response?.data ?? error,
  error
})

/**
 * Send booking data to the API 
 * @param {*} scheduleId - schedule (service) to be booked
 * @param {*} custId - who books the service
 * @param {*} workerId - who serves the booked appointment
 */
export const bookService = (scheduleId, custId, workerId) => {
  return (dispatch) => {
    const data = {
      "id": scheduleId,
      "cust_id": custId,
      "worker_id": workerId
    }
    
    const url = 'http://localhost:8080/api/booking';
    return axios.post(url, data)
      .then(res => {
        dispatch(postBookingSuccess(data));
      })
      .catch(err => {
        dispatch(postBookingFailure(err))
      })
  }
}
