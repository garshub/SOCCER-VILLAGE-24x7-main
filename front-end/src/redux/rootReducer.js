import { combineReducers } from "redux";
import { schedulerFormReducer } from "../reducers/schedulerFormReducer";
import { teamFormReducer } from "../reducers/teamRegistrationReducer";
import { tournamentDirectorReducer } from "../reducers/tournamentDirectorReducer";
import { teamDirectorReducer } from "../reducers/teamDirectorReducer";
import { refereeFormReducer } from "../reducers/refereeRegistrtionReducer";
import { fieldDirectorReducer } from "../reducers/fieldDirectorReducer"
import { refereeDirectorReducer } from "../reducers/refereeDirectorReducer";

const rootReducer = combineReducers({
    schedulerForm: schedulerFormReducer,
    teamForm: teamFormReducer,
    refereeForm: refereeFormReducer,
    tournamentDirector: tournamentDirectorReducer,
    teamDirector: teamDirectorReducer,
    fieldDirector: fieldDirectorReducer,
    refereeDirector: refereeDirectorReducer,
});

export default rootReducer;
