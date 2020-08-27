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
        schedules: json,
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
 */
export const getSchedules = () => {
    return (dispatch) => {
        dispatch(getSchedulesRequest())
      
        return axios.get('http://localhost:8080/api/booking/schedule/1')
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