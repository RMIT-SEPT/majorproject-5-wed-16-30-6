import axios from 'axios'
import { postLoginSuccess } from './loginActions'

export const POST_CUSTOMER_REQUEST = 'POST_CUSTOMER_REQUEST'
export const postCustomerRequest = () => {
  return {
    type: POST_CUSTOMER_REQUEST
  }
}

export const POST_CUSTOMER_SUCCESS = 'POST_CUSTOMER_SUCCESS'
export const postCustomerSuccess = (json) => {
  return {
    type: POST_CUSTOMER_SUCCESS,
    customer: json,
    receivedAt: Date.now()
  }
}

export const POST_CUSTOMER_FAILURE = 'POST_CUSTOMER_FAILURE'
export const postCustomerFailure = (error) => ({
  type: POST_CUSTOMER_FAILURE,
  errorMsg: error.response?.data ?? error,
  error
})

/**
 * Call the API to add a customer
 * @param {*} name 
 * @param {*} mobile 
 */
export const addCustomer = (formData) => {
  return (dispatch) => {
    dispatch(postCustomerRequest());

    const data = {
      "name": formData.name,
      "username": formData.username,
      "password": formData.password,
      "address": formData.address,
      "mobileNum": formData.mobile,
      "role": "c"
    }
    
    const url = 'http://localhost:8080/api/person';
    return axios.post(url, data)
      .then(res => {
        console.log(res);
        dispatch(postCustomerSuccess(res.data));
        dispatch(postLoginSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(postCustomerFailure(err))
      })
  }
}

