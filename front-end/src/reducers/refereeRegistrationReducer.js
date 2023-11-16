import * as types from "../utils/actionTypes";

const initialState = {
    isGetRefereeScheduleDataLoading: false,
    isGetRefereeScheduleDataError: false,
    refereeScheduleData: null,
};

export const refereeRegisterationReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_REFEREE_SCHEDULE_RESET:
            return {
                ...state,
                isGetRefereeScheduleDataLoading: false,
                isGetRefereeScheduleDataError: false,
                refereeScheduleData: null,
            };
        case types.GET_REFEREE_SCHEDULE_START_LOADER:
            return {
                ...state,
                isGetRefereeScheduleDataLoading: true,
            }
        case types.GET_REFEREE_SCHEDULE_DATA_SUCCESS:
            return {
                ...state,
                isGetRefereeScheduleDataLoading: false,
                isGetRefereeScheduleDataError: false,
                refereeScheduleData: action.data,
            }
        case types.GET_REFEREE_SCHEDULE_DATA_FAILURE:
            return {
                ...state,
                isGetRefereeScheduleDataLoading: false,
                isGetRefereeScheduleDataError: true,
                refereeScheduleData: null,
            }
        default:
            return initialState;
    }
}
