import * as types from "../utils/actionTypes";

const initialState = {
    isGetTournamentsDataLoading: false,
    isGetTournamentsDataError: false,
    tournamentsData: null,
    isGetSelectedTournamentDataLoading: false,
    isGetSelectedTournamentError: false,
    selectedTournamentData: null,
};

export const tournamentDirectorReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_TOURNAMENTS_RESET:
            return {
                ...state,
                isGetTournamentsDataLoading: false,
                isGetTournamentsDataError: false,
                tournamentsData: null,
            };
        case types.GET_TOURNAMENTS_START_LOADER:
            return {
                ...state,
                isGetTournamentsDataLoading: true,
            }
        case types.GET_TOURNAMENTS_DATA_SUCCESS:
            return {
                ...state,
                isGetTournamentsDataLoading: false,
                isGetTournamentsDataError: false,
                tournamentsData: action.data,
            }
        case types.GET_TOURNAMENTS_DATA_FAILURE:
            return {
                ...state,
                isGetTournamentsDataLoading: false,
                isGetTournamentsDataError: true,
                tournamentsData: null,
            }
        case types.GET_SELECTED_TOURNAMENT_RESET:
            return {
                ...state,
                isGetSelectedTournamentDataLoading: false,
                isGetSelectedTournamentError: false,
                selectedTournamentData: null,
            };
        case types.GET_SELECTED_TOURNAMENT_START_LOADER:
            return {
                ...state,
                isGetSelectedTournamentDataLoading: true,
            }
        case types.GET_SELECTED_TOURNAMENT_DATA_SUCCESS:
            return {
                ...state,
                isGetSelectedTournamentDataLoading: false,
                isGetSelectedTournamentError: false,
                selectedTournamentData: action.data,
            }
        case types.GET_SELECTED_TOURNAMENT_DATA_FAILURE:
            return {
                ...state,
                isGetSelectedTournamentDataLoading: false,
                isGetSelectedTournamentError: true,
                selectedTournamentData: null,
            }
        default:
            return initialState;
    }
}
