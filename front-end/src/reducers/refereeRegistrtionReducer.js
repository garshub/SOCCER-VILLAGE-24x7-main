import * as types from "../utils/actionTypes";

const initialState = {
    isSubmitRefereeFormLoading: false,
    isSubmitRefereeFormError: false,
    refereeFormSubmitData: null,
    isGetRefereeScheduleDataLoading: false,
    isGetRefereeScheduleDataError: false,
    refereeScheduleData: null,
};

export const refereeFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SUBMIT_REFEREE_RESET:
            return {
                ...state,
                isSubmitRefereeFormLoading: false,
                isSubmitRefereeFormError: false,
                refereeFormSubmitData: null,
            };
        case types.SUBMIT_REFEREE_START_LOADER:
            return {
                ...state,
                isSubmitRefereeFormLoading: true,
            };
        case types.REFEREE_FORM_DATA_SUCCESS:
            return {
                ...state,
                isSubmitRefereeFormLoading: false,
                isSubmitRefereeFormError: false,
                refereeFormSubmitData: action.data,
            };
        case types.REFEREE_FORM_DATA_FAILURE:
            return {
                ...state,
                isSubmitRefereeFormLoading: false,
                isSubmitRefereeFormError: true,
                refereeFormSubmitData: null,
            };
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
};
