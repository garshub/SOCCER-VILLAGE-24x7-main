import * as types from "../utils/actionTypes";

const initialState = {
    isGetTeamsDataLoading: false,
    isGetTeamsDataError: false,
    teamsData: null,
    isSubmitSchedulerFormLoading: false,
    isSubmitSchedulerFormError: false,
    schedulerFormSubmitData: null,
};

export const schedulerFormReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_TEAMS_RESET:
            return {
                ...state,
                isGetTeamsDataLoading: false,
                isGetTeamsDataError: false,
                teamsData: null,
            };
        case types.GET_TEAMS_START_LOADER:
            return {
                ...state,
                isGetTeamsDataLoading: true,
            }
        case types.GET_TEAMS_DATA_SUCCESS:
            return {
                ...state,
                isGetTeamsDataLoading: false,
                isGetTeamsDataError: false,
                teamsData: action.data,
            }
        case types.GET_TEAMS_DATA_FAILURE:
            return {
                ...state,
                isGetTeamsDataLoading: false,
                isGetTeamsDataError: true,
                teamsData: null,
            }
        case types.SCHEDULER_FORM_RESET:
            return {
                ...state,
                isSubmitSchedulerFormLoading: false,
                isSubmitSchedulerFormError: false,
                schedulerFormSubmitData: null,
            }
        case types.SCHEDULER_FORM_START_LOADER:
            return {
                ...state,
                isSubmitSchedulerFormLoading: true,
            }
        case types.SCHEDULER_FORM_DATA_SUCCESS:
            return {
                ...state,
                isSubmitSchedulerFormLoading: false,
                isSubmitSchedulerFormError: false,
                schedulerFormSubmitData: action.data,
            }
        case types.SCHEDULER_FORM_DATA_FAILURE:
            return {
                ...state,
                isSubmitSchedulerFormLoading: false,
                isSubmitSchedulerFormError: true,
                schedulerFormSubmitData: action.error,
            }
        default:
            return initialState;
    }
}
