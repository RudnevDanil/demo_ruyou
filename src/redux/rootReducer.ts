import {combineReducers} from 'redux'
import {app} from './reducers/app'
import {palette} from './reducers/palette'

export const rootReducer = combineReducers({
    app,
    palette,
})
