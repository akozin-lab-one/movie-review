import { actionType } from "../action-type"

export const fetchmovies = (movies) => {
    return {
        type: actionType.FETCH_MOVIES,
        payload: movies
    }
}

export const selectmovies = (movies) => {
    return {
        type: actionType.SELECT_MOVIE,
        payload: movies
    }
}

export const deSelectmovies = (movies) => {
    return {
        type: actionType.DELETE_SELECTED_MOVIE,
        payload: movies
    }
}