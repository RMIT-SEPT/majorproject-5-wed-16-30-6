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
    LOGIN: json,
    receivedAt: Date.now()
  }
}

export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
export const postLoginFailure = (error) => ({
  type: POST_LOGIN_FAILURE,
  errorMsg: error.response.data,
  error
})

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

    console.log(data);

    // TODO: change API 
    const url = 'http://localhost:8080/api/person';
    return axios.post(url, data)
      .then(res => {
        console.log(res);
        dispatch(postLoginSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(postLoginFailure(err))
      })
  }
}