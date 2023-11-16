import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetSubmitTeamData = () => {
    return dispatch => {
        dispatch({type: types.SUBMIT_TEAMS_RESET});
    }
}

export const startSubmitTeamDataLoader = () => {
    return dispatch => {
        dispatch({type: types.SUBMIT_TEAMS_START_LOADER});
    }
}

export const submitTeamData = (body) => {
    return dispatch => {
        API.post(`${baseUrl}team/register`,
        null,
        null,
        body
        ).then(response => {
            dispatch({
                type: types.TEAM_FORM_DATA_SUCCESS,
                data: response.data,
            });
            alert("Team registration request submitted successfully!");
        },
        error => {
            dispatch({
                type: types.TEAM_FORM_DATA_FAILURE,
                error
            });
            alert("Technical error occured!");
        })
    }
}