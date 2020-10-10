import { combineReducers } from 'redux'
import schedules from './scheduleReducer'
import workerReducer from './workerReducer'
import customerReducer from './customerReducer'
import loginReducer from './loginReducer'
import bookingReducer from './bookingReducer'

const allReducers = {
    schedules: schedules,
    workerReducer: workerReducer,
    customerReducer: customerReducer,
    loginReducer: loginReducer
    bookingReducer: bookingReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;
