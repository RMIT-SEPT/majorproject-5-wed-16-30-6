import {
  POST_WORKER_REQUEST, POST_WORKER_SUCCESS, POST_WORKER_FAILURE
} from '../actions/adminActions'

const initalState = {
  isFetching: false
}

/**
 * return the result of submitting worker to register
*/
const workerReducer = (state = [initalState], action) => {    
  switch (action.type) {
    case POST_WORKER_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
        }
      ]
    case POST_WORKER_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          worker: action.worker,
          lastUpdated: action.receivedAt,
          addWorkerSuccess: true
        }
      ]
    case POST_WORKER_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          errorMsg: action.errorMsg,
          error: action.error,
          addWorkerSuccess: false
        }
      ]
    default:
      return state
  }
}

export default workerReducer