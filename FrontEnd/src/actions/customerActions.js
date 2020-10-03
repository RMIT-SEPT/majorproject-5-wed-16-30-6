import axios from 'axios'

export const POST_CUSTOMER_REQUEST = 'POST_CUSTOMER_REQUEST'
const postCustomerRequest = () => {
  return {
    type: POST_CUSTOMER_REQUEST
  }
}

export const POST_CUSTOMER_SUCCESS = 'POST_CUSTOMER_SUCCESS'
const postCustomerSuccess = (json) => {
  return {
    type: POST_CUSTOMER_SUCCESS,
    customer: json,
    receivedAt: Date.now()
  }
}

export const POST_CUSTOMER_FAILURE = 'POST_CUSTOMER_FAILURE'
const postCustomerFailure = (error) => ({
  type: POST_CUSTOMER_FAILURE,
  errorMsg: error.response.data,
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

    // const data = {
    //     "name": this.state.formData.name,
    //     "username": this.state.formData.username,
    //     "password": this.state.formData.password,
    //     "address": this.state.formData.address,
    //     "mobileNum": this.state.formData.mobile,
    //     "role": "c"
    // }

    const data = {
      "name": formData.name,
      "username": formData.username,
      "password": formData.password,
      "address": formData.address,
      "mobileNum": formData.mobile,
      "role": "c"
    }

    console.log(data);
    
    const url = 'http://localhost:8080/api/person';
    return axios.post(url, data)
      .then(res => {
        console.log(res);
        dispatch(postCustomerSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(postCustomerFailure(err))
      })
  }
}

export const LOG_IN = 'LOG_IN'
export const logIn = (username, userId) => {
  return {
    type: LOG_IN,
    username: username,
    userId: userId
  }
}

export const LOG_OUT = 'LOG_OUT'
export const logOut = () => {
  return {
    type: LOG_OUT,
    username: "",
    userId: ""
  }
}