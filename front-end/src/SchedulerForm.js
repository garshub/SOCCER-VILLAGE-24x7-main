import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import SearchableDropDown from "./SearchableDropdown";
import CheckboxDropDown from "./CheckboxDropdown";
import Input from "./input";
import Button from "./Button";
import * as schedulerFormActions from "./actions/schedulerFormAction";
import {
    ageGroupList,
    genderList,
    convertMasterToDropDownOptions,
} from "./utils/Constants";
import styles from "./SchedulerForm.module.css";

const SchedulerForm = (props) => {
    useEffect(() => {
        props.dispatch(schedulerFormActions.resetSubmitSchedulerForm());
        props.dispatch(schedulerFormActions.resetGetTeamData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [teamsList, setTeamsList] = useState([]);
    const [teams, setTeams] = useState([]);
    const [tournamentName, setTournamentName] = useState("");
    const [emailId, setEmailId] = useState("");

    let history = useHistory();

    const handleSubmit = () => {
        const response = {
            age_group: `${age.value.maxAge}+`,
            gender: gender.value,
            teams,
            name: tournamentName,
            email: emailId,
        };
        props.dispatch(schedulerFormActions.resetSubmitSchedulerForm());
        props.dispatch(schedulerFormActions.startSubmitSchedulerFormLoader());
        props.dispatch(schedulerFormActions.submitSchedulerForm(response));

        history.push("/gameSchedule");
    };

    const resetForm = () => {
        setAge(null);
        setGender(null);
        setTeams(null);
        setTournamentName("");
        setEmailId("");
    };

    useEffect(() => {
        if (age && gender) {
            const params = {
                minAge: age ? age.value.minAge : null,
                maxAge: age ? age.value.maxAge : null,
                gender: gender && gender.value,
            };
            props.dispatch(schedulerFormActions.resetGetTeamData());
            props.dispatch(schedulerFormActions.startGetTeamDataLoader());
            props.dispatch(schedulerFormActions.getTeamData(params));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [age, gender]);

    useEffect(() => {
        if (props.schedulerForm.teamsData) {
            setTeamsList(
                convertMasterToDropDownOptions(
                    props.schedulerForm.teamsData,
                    "teamname",
                    "teamname"
                )
            );
        }
    }, [props.schedulerForm.teamsData]);

    useEffect(() => {
        if (props.schedulerForm.schedulerFormSubmitData) {
            resetForm();
        }
    }, [props.schedulerForm.schedulerFormSubmitData]);
    return (
        <div className={styles.schedulerContainer}>
            <div className={styles.schedulerFormBody}>
                <div className={styles.titleDiv}>
                    Welcome to Soccer Village 24x7! To schedule a tournament
                    please fill the following details:
                </div>
                <div className={styles.schedulerFormDiv}>
                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Age Group</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <SearchableDropDown
                            placeholder={"Select Age Group"}
                            options={ageGroupList}
                            type={"age"}
                            optionSelected={(option) => setAge(option)}
                            inputStyle={styles.input}
                            isClearable={true}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Gender</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <SearchableDropDown
                            placeholder={"Select Gender"}
                            options={genderList}
                            type={"gender"}
                            optionSelected={(option) => setGender(option)}
                            inputStyle={styles.input}
                            isClearable={true}
                        />
                    </div>

                    <div className={styles.inputGroupFull}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Teams</div>
                        </div>
                        <CheckboxDropDown
                            options={teamsList}
                            onSelection={(optionList) => setTeams(optionList)}
                            displayLabel={true}
                            width={100}
                            titleLength={50}
                            defaultSelectAll={false}
                            getDefaultSelectAllList={true}
                            searchable={true}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Tournament Name</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={tournamentName}
                            autofocus={false}
                            callback={(e) => setTournamentName(e)}
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Email ID</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={emailId}
                            autofocus={false}
                            callback={(e) => setEmailId(e)}
                        />
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        id="upload"
                        content="Submit"
                        isripplerequired={true}
                        handleClick={() => handleSubmit()}
                        disabled={
                            !age ||
                            !gender ||
                            teams.length <= 2 ||
                            tournamentName === "" ||
                            emailId === ""
                        }
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        schedulerForm: state.schedulerForm,
    };
};

export default connect(mapStateToProps)(SchedulerForm);
