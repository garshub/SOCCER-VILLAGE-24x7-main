import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetTeamsData = () => {
    return dispatch => {
        dispatch({type: types.GET_UNAPPROVED_TEAMS_RESET});
    }
}

export const startGetTeamsDataLoader = () => {
    return dispatch => {
        dispatch({type: types.GET_UNAPPROVED_TEAMS_START_LOADER});
    }
}

export const getTeamsData = (param) => {
    return dispatch => {
        API.get(`${baseUrl}team/status/${param}`,
        null,
        null,
        ).then(response => {
            dispatch({
                type: types.GET_UNAPPROVED_TEAMS_DATA_SUCCESS,
                data: response.data,
            });
        },
        error => {
            dispatch({
                type: types.GET_UNAPPROVED_TEAMS_DATA_FAILURE,
                error
            });
        })
    }
}

export const resetApproveTeams = () => {
    return dispatch => {
        dispatch({type: types.APPROVE_TEAMS_RESET});
    }
}

export const startTeamApprovalLoader = () => {
    return dispatch => {
        dispatch({type: types.START_APPROVE_TEAMS_LOADER});
    }
}

export const approveTeams = (idString) => {
    return dispatch => {
        API.put(`${baseUrl}team/bulkStatusUpdate?ids=${idString}`,
        null,
        null,
        null
        ).then(response => {
            dispatch({
                type: types.TEAM_APPROVAL_SUCCESS,
                data: response.data,
            });
            alert("Team approval successful!");
        },
        error => {
            dispatch({
                type: types.TEAM_APPROVAL_FAILURE,
                error
            });
            alert("Technical error occured!");
        })
    }
}