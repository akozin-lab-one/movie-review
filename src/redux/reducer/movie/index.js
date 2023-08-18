import { actionType } from "../../action/action-type"

const initialState = {
    movies: [],
    movie: {}
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.FETCH_MOVIES:
            return {...initialState, movies: payload }

        case actionType.SELECT_MOVIE:
            return {...initialState, movie: payload }

        case actionType.DELETE_SELECTED_MOVIE:
            return {...initialState, movie: payload }
        default:
            return initialState;
    }
}