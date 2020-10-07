import {
  POST_CUSTOMER_REQUEST, POST_CUSTOMER_SUCCESS, POST_CUSTOMER_FAILURE
} from '../actions/customerActions'

const initalState = {
  login: false
}

const customerReducer = (state = [initalState], action) => {
  switch (action.type) {
    case POST_CUSTOMER_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          login: false
        }
      ]
    case POST_CUSTOMER_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          customer: action.customer,
          lastUpdated: action.receivedAt,
          login: true
        }
      ]
    case POST_CUSTOMER_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          errorMsg: action.errorMsg,
          error: action.error,
          login: false
        }
      ]
    default:
      return state
  }
}

export default customerReducer