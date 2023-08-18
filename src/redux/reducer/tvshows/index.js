import { actionType } from "../../action/action-type";

const initialState = {
    tvshows: {},
    tvshow: []
}

export const TvshowReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.FETCH_TVSHOWS:
            return {...initialState, tvshows: payload }

        case actionType.SELECT_TVSHOWS:
            return {...initialState, tvshow: payload }

        case actionType.DELETE_SELECTED_TVSHOWS:
            return {...initialState, tvshow: payload }

        default:
            return initialState;
    }
}