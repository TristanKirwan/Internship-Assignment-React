import {combineReducers} from 'redux'

import favouritereducer from './favouritereducer'

export default combineReducers({
    favourite: favouritereducer
})