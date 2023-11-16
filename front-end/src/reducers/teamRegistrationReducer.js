import * as types from "../utils/actionTypes";

const initialState = {
    isSubmitTeamFormLoading: false,
    isSubmitTeamFormError: false,
    teamFormSubmitData: null,
};

export const teamFormReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SUBMIT_TEAMS_RESET:
            return {
                ...state,
                isSubmitTeamFormLoading: false,
                isSubmitTeamFormError: false,
                teamFormSubmitData: null,
            };
        case types.SUBMIT_TEAMS_START_LOADER:
            return {
                ...state,
                isSubmitTeamFormLoading: true,
            }
        case types.TEAM_FORM_DATA_SUCCESS:
            return {
                ...state,
                isSubmitTeamFormLoading: false,
                isSubmitTeamFormError: false,
                teamFormSubmitData: action.data,
            }
        case types.TEAM_FORM_DATA_FAILURE:
            return {
                ...state,
                isSubmitTeamFormLoading: false,
                isSubmitTeamFormError: true,
                teamFormSubmitData: null,
            }
        default:
            return initialState;
    }
}
