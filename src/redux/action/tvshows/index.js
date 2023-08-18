import { actionType } from "../action-type"

export const fetchTvshows = (tvshows) => {
    return {
        type: actionType.FETCH_TVSHOWS,
        payload: tvshows
    }
}

export const selectTvshows = (tvshows) => {
    return {
        type: actionType.SELECT_TVSHOWS,
        payload: tvshows
    }
}

export const deselecttvshows = (tvshows) => {
    return {
        type: actionType.DELETE_SELECTED_TVSHOWS,
        payload: tvshows
    }
}