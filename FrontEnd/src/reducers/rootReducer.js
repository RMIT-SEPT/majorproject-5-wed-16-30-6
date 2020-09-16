import { combineReducers } from 'redux'
import schedules from './scheduleReducer'
import workerReducer from './workerReducer'

const allReducers = {
    schedules: schedules,
    workerReducer: workerReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer;