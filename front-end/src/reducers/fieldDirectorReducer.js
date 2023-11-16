import * as types from "../utils/actionTypes";

const initialState = {
    isGetMatchesDataLoading: false,
    isGetMatchesDataError: false,
    matchesData: null,
    isMatchUpdationLoading: false,
    isMatchUpdationError: false,
    isMatchUpdationSuccess: false,
};

export const fieldDirectorReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_MATCHES_RESET:
            return {
                ...state,
                isGetMatchesDataLoading: false,
                isGetMatchesDataError: false,
                matchesData: null,
            };
        case types.GET_MATCHES_START_LOADER:
            return {
                ...state,
                isGetMatchesDataLoading: false,
            }
        case types.GET_MATCHES_DATA_SUCCESS:
            return {
                ...state,
                isGetMatchesDataLoading: false,
                isGetMatchesDataError: false,
                matchesData: getMatches(action.data),
            }
        case types.GET_MATCHES_DATA_FAILURE:
            return {
                ...state,
                isGetMatchesDataLoading: false,
                isGetMatchesDataError: true,
                matchesData: null,
            }
        case types.UPDATE_MATCH_RESET:
            return {
                ...state,
                isMatchUpdationLoading: false,
                isMatchUpdationError: false,
                isMatchUpdationSuccess: false,
            }
        case types.START_UPDATE_MATCH_LOADER:
            return {
                ...state,
                isMatchUpdationLoading: true,
            }
        case types.MATCH_UPDATION_SUCCESS:
            return {
                ...state,
                isMatchUpdationLoading: false,
                isMatchUpdationError: false,
                isMatchUpdationSuccess: true,
            }
        case types.MATCH_UPDATION_FAILURE:
            return {
                ...state,
                isMatchUpdationLoading: false,
                isMatchUpdationError: true,
                isMatchUpdationSuccess: false,
            }
        default:
            return initialState;
    }
}

const getMatches = (tournamentData) => {
    const matchesData = []
    tournamentData.forEach(tournament => {
        tournament.all_matches.forEach(match => {
            matchesData.push(match);
        })
    });
    return matchesData;
}
