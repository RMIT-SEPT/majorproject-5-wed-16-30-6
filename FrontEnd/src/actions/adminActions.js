import axios from 'axios'

export const POST_WORKER_REQUEST = 'POST_WORKER_REQUEST'
const postWorkerRequest = () => {
  return {
    type: POST_WORKER_REQUEST
  }
}

export const POST_WORKER_SUCCESS = 'POST_WORKER_SUCCESS'
const postWorkerSuccess = (json) => {
  return {
    type: POST_WORKER_SUCCESS,
    worker: json,
    receivedAt: Date.now()
  }
}

export const POST_WORKER_FAILURE = 'POST_WORKER_FAILURE'
const postWorkerFailure = (error) => ({
  type: POST_WORKER_FAILURE,
  errorMsg: error.response.data,
  error
})

/**
 * Call the API to add a worker
 * @param {*} name 
 * @param {*} mobile 
 */
export const addWorker = (formState) => {
  return (dispatch) => {
    dispatch(postWorkerRequest());

    const data = {
      "name": formState.name,
      "username": formState.personId,
      "password": formState.personId,
      "desc": formState.desc,
      "mobileNum": formState.mobile,
      "address": "null",
      "start_date": formState.startDate,
      "end_date": formState.endDate,
      "role": "w"
    }
    
    const url = 'http://ec2-107-23-134-217.compute-1.amazonaws.com:8080/api/person';
    return axios.post(url, data)
      .then(res => {
        dispatch(postWorkerSuccess(res.data));
      })
      .catch(err => {
        dispatch(postWorkerFailure(err))
      })
  }
}