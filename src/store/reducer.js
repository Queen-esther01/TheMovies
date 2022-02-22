import { combineReducers } from "redux";
import movieSlice from './actions/movieActions';

export default combineReducers({
    movie: movieSlice,
})
