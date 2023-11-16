import * as types from "../utils/actionTypes";

const initialState = {
    unapprovedRefereeData: null,
    isRefereeApprovalSuccess: false,
};

export const refereeDirectorReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_UNAPPROVED_REFEREE_RESET:
            return {
                ...state,
                unapprovedRefereeData: null,
            };
        case types.GET_UNAPPROVED_REFEREE_DATA_SUCCESS:
            return {
                ...state,
                unapprovedRefereeData: action.data,
            }
        case types.GET_UNAPPROVED_REFEREE_DATA_FAILURE:
            return {
                ...state,
                unapprovedRefereeData: null,
            }
        case types.APPROVE_REFEREE_RESET:
            return {
                ...state,
                isRefereeApprovalSuccess: false,
            }
        case types.REFEREE_APPROVAL_SUCCESS:
            return {
                ...state,
                isRefereeApprovalSuccess: true,
            }
        case types.REFEREE_APPROVAL_FAILURE:
            return {
                ...state,
                isRefereeApprovalSuccess: false,
            }
        default:
            return initialState;
    }
}
