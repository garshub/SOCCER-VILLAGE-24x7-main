import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetGetTeamData = () => {
    return dispatch => {
        dispatch({type: types.GET_TEAMS_RESET});
    }
}

export const startGetTeamDataLoader = () => {
    return dispatch => {
        dispatch({type: types.GET_TEAMS_START_LOADER});
    }
}

export const getTeamData = (params) => {
    return dispatch => {
        API.get(`${baseUrl}team/customTeamFilter`,
        null,
        params,
        ).then(response => {
            dispatch({
                type: types.GET_TEAMS_DATA_SUCCESS,
                data: response.data,
            });
        },
        error => {
            dispatch({
                type: types.GET_TEAMS_DATA_FAILURE,
                error
            });
        })
    }
}

export const resetSubmitSchedulerForm = () => {
    return dispatch => {
        dispatch({type: types.SCHEDULER_FORM_RESET});
    }
}

export const startSubmitSchedulerFormLoader = () => {
    return dispatch => {
        dispatch({type: types.SCHEDULER_FORM_START_LOADER});
    }
}

export const submitSchedulerForm = (body) => {
    return dispatch => {
        API.post(`${baseUrl}tournament/schedule`,
        null,
        null,
        body
        ).then(response => {
            dispatch({
                type: types.SCHEDULER_FORM_DATA_SUCCESS,
                data: response.data,
            });
        },
        error => {
            dispatch({
                type: types.SCHEDULER_FORM_DATA_FAILURE,
                error
            });
        })
    }
}