import API from "../lib/api";
import * as types from "../utils/actionTypes";

const baseUrl = "http://localhost:8080/api/";

export const resetRefereeScheduleData = () => {
    return dispatch => {
        dispatch({type: types.GET_REFEREE_SCHEDULE_RESET});
    }
}

export const startGetRefereeScheduleDataLoader = () => {
    return dispatch => {
        dispatch({type: types.GET_REFEREE_SCHEDULE_START_LOADER});
    }
}

export const getRefereeScheduleData = (param = null, showScheduleInPopup) => {
    return dispatch => {
        API.get(`${baseUrl}referee/schedule`,
        null,
        param,
        ).then(response => {
            dispatch({
                type: types.GET_REFEREE_SCHEDULE_DATA_SUCCESS,
                data: response.data,
            });
            showScheduleInPopup(true);
        },
        error => {
            dispatch({
                type: types.GET_REFEREE_SCHEDULE_DATA_FAILURE,
                error
            });
        })
    }
}