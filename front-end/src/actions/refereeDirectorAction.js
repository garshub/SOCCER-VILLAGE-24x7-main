import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetRefereeData = () => {
    return dispatch => {
        dispatch({type: types.GET_UNAPPROVED_REFEREE_RESET});
    }
}

export const getRefereeData = (param) => {
    return dispatch => {
        API.get(`${baseUrl}referee/status/${param}`,
        null,
        null,
        ).then(response => {
            dispatch({
                type: types.GET_UNAPPROVED_REFEREE_DATA_SUCCESS,
                data: response.data,
            });
        },
        error => {
            dispatch({
                type: types.GET_UNAPPROVED_REFEREE_DATA_FAILURE,
                error
            });
        })
    }
}

export const resetApproveReferees = () => {
    return dispatch => {
        dispatch({type: types.APPROVE_REFEREE_RESET});
    }
}

export const approveReferees = (idString) => {
    return dispatch => {
        API.put(`${baseUrl}referee/bulkStatusUpdate?ids=${idString}`,
        null,
        null,
        null
        ).then(response => {
            dispatch({
                type: types.REFEREE_APPROVAL_SUCCESS,
                data: response.data,
            });
            alert("Team approval successful!");
        },
        error => {
            dispatch({
                type: types.REFEREE_APPROVAL_FAILURE,
                error
            });
            alert("Technical error occured!");
        })
    }
}