import {
  POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE
} from '../actions/loginActions'

const initalState = {
  login: false
}

const loginReducer = (state = [initalState], action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          login: false
        }
      ]
    case POST_LOGIN_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          login: action.login,
          lastUpdated: action.receivedAt,
          login: true
        }
      ]
    case POST_LOGIN_FAILURE:
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

export default loginReducer;