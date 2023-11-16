import * as types from "../utils/actionTypes";

const initialState = {
    isGetUnapprovedTeamsDataLoading: false,
    isGetUnapprovedTeamsDataError: false,
    unapprovedTeamsData: null,
    isTeamApprovalLoading: false,
    isTeamApprovalError: false,
    isTeamApprovalSuccess: false,
};

export const teamDirectorReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_UNAPPROVED_TEAMS_RESET:
            return {
                ...state,
                isGetUnapprovedTeamsDataLoading: false,
                isGetUnapprovedTeamsDataError: false,
                unapprovedTeamsData: null,
            };
        case types.GET_UNAPPROVED_TEAMS_START_LOADER:
            return {
                ...state,
                isGetUnapprovedTeamsDataLoading: true,
            }
        case types.GET_UNAPPROVED_TEAMS_DATA_SUCCESS:
            return {
                ...state,
                isGetUnapprovedTeamsDataLoading: false,
                isGetUnapprovedTeamsDataError: false,
                unapprovedTeamsData: action.data,
            }
        case types.GET_UNAPPROVED_TEAMS_DATA_FAILURE:
            return {
                ...state,
                isGetUnapprovedTeamsDataLoading: false,
                isGetUnapprovedTeamsDataError: true,
                unapprovedTeamsData: null,
            }
        case types.APPROVE_TEAMS_RESET:
            return {
                ...state,
                isTeamApprovalLoading: false,
                isTeamApprovalError: false,
                isTeamApprovalSuccess: false,
            }
        case types.START_APPROVE_TEAMS_LOADER:
            return {
                ...state,
                isTeamApprovalLoading: true,
            }
        case types.TEAM_APPROVAL_SUCCESS:
            return {
                ...state,
                isTeamApprovalLoading: false,
                isTeamApprovalError: false,
                isTeamApprovalSuccess: true,
            }
        case types.TEAM_APPROVAL_FAILURE:
            return {
                ...state,
                isTeamApprovalLoading: false,
                isTeamApprovalError: true,
                isTeamApprovalSuccess: false,
            }
        default:
            return initialState;
    }
}
