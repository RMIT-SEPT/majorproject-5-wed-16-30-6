import axios from 'axios'

export const POST_WORKER_REQUEST = 'POST_WORKER_REQUEST'
const postWorkerRequest = () => {
  return {
    type: POST_WORKER_REQUEST
  }
}

// TODO: replace this
export const POST_WORKER_SUCCESS = 'POST_WORKER_SUCCESS'
const postWorkerSuccess = () => {
  return {
    type: POST_WORKER_SUCCESS,
    worker: "test worker",
    receivedAt: Date.now()
  }
}
// const postWorkerSuccess = (json) => {
//   return {
//     type: POST_WORKER_SUCCESS,
//     worker: json,
//     receivedAt: Date.now()
//   }
// }

export const POST_WORKER_FAILURE = 'POST_WORKER_FAILURE'
const postWorkerFailure = (error) => ({
  type: POST_WORKER_FAILURE,
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
      "personIdentifier": formState.personId,
      "desc": formState.desc,
      "mobileNum": formState.mobile,
      "start_date": formState.start_date,
      "end_date": formState.end_date
    }

    console.log(data);
    
    const url = 'http://localhost:8080/api/person';
    return axios.post(url, data)
      .then(res => {
        dispatch(postWorkerSuccess(res.data));
      })
      .catch(err => {
        dispatch(postWorkerSuccess(err))
        //dispatch(postWorkerFailure(err))

        console.log(err);
      })
  }
}