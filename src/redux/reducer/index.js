import { combineReducers } from "redux";
import { movieReducer } from "./movie";
import { TvshowReducer } from "./tvshows";

const reducer = combineReducers({
    movies: movieReducer,
    tvshows: TvshowReducer
})

export default reducer