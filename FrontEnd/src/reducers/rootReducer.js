import { combineReducers } from 'redux'
import schedules from './scheduleReducer'
import workerReducer from './workerReducer'
import customerReducer from './customerReducer'
import bookingReducer from './bookingReducer'

const allReducers = {
    schedules: schedules,
    workerReducer: workerReducer,
    customerReducer: customerReducer,
    bookingReducer: bookingReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;