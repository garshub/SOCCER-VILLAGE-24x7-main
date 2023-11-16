import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetTournamentData = () => {
    return dispatch => {
        dispatch({type: types.GET_TOURNAMENTS_RESET});
    }
}

export const startGetTournamentDataLoader = () => {
    return dispatch => {
        dispatch({type: types.GET_TOURNAMENTS_START_LOADER});
    }
}

export const getTournamentData = (params=null) => {
    return dispatch => {
        API.get(
        `${baseUrl}tournament/all`,
        null,
        params,
        ).then(response => {
            dispatch({
                type: types.GET_TOURNAMENTS_DATA_SUCCESS,
                data: response.data,
            });
        },
        error => {
            dispatch({
                type: types.GET_TOURNAMENTS_DATA_FAILURE,
                error
            });
        })
    }
}

export const resetSelectedTournamentData = () => {
    return dispatch => {
        dispatch({type: types.GET_SELECTED_TOURNAMENT_RESET});
    }
}

export const startGetSelectedTournamentDataLoader = () => {
    return dispatch => {
        dispatch({type: types.GET_SELECTED_TOURNAMENT_START_LOADER});
    }
}

export const getSelectedTournamentData = (tournamentId, showPopup) => {
    return dispatch => {
        API.get(
        `${baseUrl}tournament/${tournamentId}`,
        null,
        null,
        ).then(response => {
            dispatch({
                type: types.GET_SELECTED_TOURNAMENT_DATA_SUCCESS,
                data: response.data,
            });
            showPopup(true);
        },
        error => {
            dispatch({
                type: types.GET_SELECTED_TOURNAMENT_DATA_FAILURE,
                error
            });
        })
    }
}