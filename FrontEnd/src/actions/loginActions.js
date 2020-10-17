import axios from 'axios'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const postLoginRequest = () => {
  return {
    type: POST_LOGIN_REQUEST
  }
}

export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const postLoginSuccess = (json) => {
  return {
    type: POST_LOGIN_SUCCESS,
    person: json,
    receivedAt: Date.now()
  }
}

export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
export const postLoginFailure = (error) => ({
  type: POST_LOGIN_FAILURE,
  errorMsg: error.response?.data ?? error,
  error
})

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    login: false
  }
}

/**
 * call the api to login 
 * @param {} formData 
 */
export const loginUser = (formData) => {
  return (dispatch) => {
    dispatch(postLoginRequest());

    const data = {
      "username": formData.username,
      "password": formData.password
    }

    const url = 'http://ec2-107-23-134-217.compute-1.amazonaws.com:8080/api/login';
    return axios.post(url, data)
      .then(res => {
        dispatch(postLoginSuccess(res.data));
      })
      .catch(err => {
        dispatch(postLoginFailure(err))
      })
  }
}
