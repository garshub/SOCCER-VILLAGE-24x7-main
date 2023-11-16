import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetMatchesData = () => {
    return dispatch => {
        dispatch({type: types.GET_MATCHES_RESET});
    }
}

export const startGetMatchesDataLoader = () => {
    return dispatch => {
        dispatch({type: types.GET_MATCHES_START_LOADER});
    }
}

export const getMatchesData = (param = null) => {
    return dispatch => {
        API.get(`${baseUrl}tournament/all`,
        null,
        param,
        ).then(response => {
            dispatch({
                type: types.GET_MATCHES_DATA_SUCCESS,
                data: response.data,
            });
        },
        error => {
            dispatch({
                type: types.GET_MATCHES_DATA_FAILURE,
                error
            });
        })
    }
}

export const resetUpdateMatches = () => {
    return dispatch => {
        dispatch({type: types.UPDATE_MATCH_RESET});
    }
}

export const startMatchUpdationLoader = () => {
    return dispatch => {
        dispatch({type: types.START_UPDATE_MATCH_LOADER});
    }
}

export const updateVenues = (payload) => {
    return dispatch => {
        API.put(`${baseUrl}matches/matchVenueUpdate`,
        null,
        null,
        payload,
        ).then(response => {
            dispatch({
                type: types.MATCH_UPDATION_SUCCESS,
                data: response.data,
            });
            alert("Matches Updated successfully!");
        },
        error => {
            dispatch({
                type: types.MATCH_UPDATION_FAILURE,
                error
            });
            alert("Technical error occured!");
        })
    }
}

export const updateMatchScores = (payload) => {
    return dispatch => {
        API.post(`${baseUrl}matches/update`,
        null,
        null,
        payload,
        ).then(response => {
            dispatch({
                type: types.MATCH_UPDATION_SUCCESS,
                data: response.data,
            });
            alert("Matches Updated successfully!");
        },
        error => {
            dispatch({
                type: types.MATCH_UPDATION_FAILURE,
                error
            });
            alert("Technical error occured!");
        })
    }
}

export const updateReferee = (payload) => {
    return dispatch => {
        API.post(`${baseUrl}matches/referee/update`,
        null,
        null,
        payload,
        ).then(response => {
            dispatch({
                type: types.MATCH_UPDATION_SUCCESS,
                data: response.data,
            });
            alert("Matches Updated successfully!");
        },
        error => {
            dispatch({
                type: types.MATCH_UPDATION_FAILURE,
                error
            });
            alert("Technical error occured!");
        })
    }
}