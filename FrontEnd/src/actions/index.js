import axios from 'axios'

export const GET_SCHEDULES_REQUEST = 'GET_SCHEDULES_REQUEST'
const getSchedulesRequest = () => {
    return {
        type: GET_SCHEDULES_REQUEST
    }
}

export const GET_SCHEDULES_SUCCESS = 'GET_SCHEDULES_SUCCESS'
const getSchedulesSuccess = (json) => {  
    return {
        type: GET_SCHEDULES_SUCCESS,
        schedules: json.schedules,
        workers: json.workers,
        receivedAt: Date.now()
    }
}

export const GET_SCHEDULES_FAILURE = 'GET_SCHEDULES_FAILURE'
const getSchedulesFailure = (error) => ({
    type: GET_SCHEDULES_FAILURE,
    error
})

/**
 * Call API to get all schedules for the business
 * @param {*} param : business ID
 */
export const getSchedules = (param) => {
    return (dispatch) => {
        dispatch(getSchedulesRequest())
        const url = 'http://ec2-107-23-134-217.compute-1.amazonaws.com:8080/api/booking/schedule/' + param.businessId;
      
        return axios.get(url)
        .then(res => {
            console.log(res.data);
            dispatch(getSchedulesSuccess(res.data));
        })
        .catch(err => 
            dispatch(getSchedulesFailure(err))
        )
    }
}

export default getSchedules