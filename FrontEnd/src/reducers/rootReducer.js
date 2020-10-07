import { combineReducers } from 'redux'
import schedules from './scheduleReducer'
import workerReducer from './workerReducer'
import customerReducer from './customerReducer'

const allReducers = {
    schedules: schedules,
    workerReducer: workerReducer,
    customerReducer: customerReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;