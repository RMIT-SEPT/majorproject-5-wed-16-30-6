import { combineReducers } from 'redux'
import schedules from './scheduleReducer'

const rootReducer = combineReducers({
    schedules
})

export default rootReducer