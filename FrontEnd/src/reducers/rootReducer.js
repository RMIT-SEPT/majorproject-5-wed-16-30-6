import { combineReducers } from 'redux'
import schedules from './scheduleReducer'
import workerReducer from './workerReducer'
import customerReducer from './customerReducer'
import loginReducer from './loginReducer'

const allReducers = {
    schedules: schedules,
    workerReducer: workerReducer,
    customerReducer: customerReducer,
    loginReducer: loginReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;