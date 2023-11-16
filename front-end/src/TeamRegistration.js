import React, {useState} from "react";
import { connect } from "react-redux";
import * as teamFormActions from "./actions/teamRegistrationActions";
import SearchableDropDown from "./SearchableDropdown";
import Input from "./input";
import Button from "./Button";
import { ageGroupList, generateUniqueId } from "./utils/Constants";
import styles from "./TeamRegistration.module.css";

const TeamRegistration = props => {
    const [teamName, setTeamName] = useState("");
    const [coachName, setCoachName] = useState("");
    const [ageGroup, setAge] = useState(null);
    const [coachEmail, setCoachEmail] = useState("");
    const [coachContact, setCoachContact] = useState("");
    const [players, setPlayersData] = useState([{id: generateUniqueId(), name: "", age: "", gender: "", email: ""}]);

    const handleSubmit = () => {
        const response = {
            teamName,
            coachName,
            players,
            coachEmail,
            contactNo: coachContact,
            ageGroup: ageGroup && ageGroup.value.maxAge
        };
        props.dispatch(teamFormActions.resetSubmitTeamData());
        props.dispatch(teamFormActions.startSubmitTeamDataLoader());
        props.dispatch(teamFormActions.submitTeamData(response));
    }

    const editTable = (operation, rowObject = {}, newValue = "") => {
        let updatedPlayersObject = [...players];
        const rowToBeupdated = updatedPlayersObject.filter(player => player.id === rowObject.id)[0];
        if(rowToBeupdated) {
            if(operation === "delete") {
                updatedPlayersObject.splice(updatedPlayersObject.indexOf(rowObject), 1);
            } else {
                updatedPlayersObject = updatedPlayersObject.map(player => {
                    const updatedObject = {...player};
                    if(player.id === rowObject.id){
                        updatedObject[operation] = newValue;
                    }
                    return updatedObject;
                });
            }
        } else {
            if(operation === "add"){
                updatedPlayersObject.push({id: generateUniqueId(), name: "", age: "", gender: "", email: ""});
            }
        }
        setPlayersData(updatedPlayersObject);
    }

    const rowElements = players.map(player => {
        return <tr>
            <td>
                <Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={player.name}
                    autofocus={false}
                    callback={(e) => editTable("name", player, e)}
                />
            </td>
            <td>
                <Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={player.age}
                    autofocus={false}
                    callback={(e) => editTable("age", player, e)}
                />
            </td>
            <td>
                <Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={player.gender}
                    autofocus={false}
                    callback={(e) => editTable("gender", player, e)}
                />
            </td>
            <td>
                <Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={player.email}
                    autofocus={false}
                    callback={(e) => editTable("email", player, e)}
                />
            </td>
            <td>
                <Button 
                    content="Delete"
                    style={styles.smallButton}
                    isripplerequired={true}
                    handleClick={(e) => editTable("delete", player, e)}
                    disabled={players.length === 1}
                />
            </td>
        </tr>;
    });
    return (<div className={styles.schedulerContainer}>
                <div className={styles.schedulerFormBody}>
                    <div className={styles.titleDiv}>
                        Welcome to Soccer Village 24x7! To register a team
                        please fill the following details:
                    </div>
                    <div className={styles.schedulerFormDiv}>
                        <div className={styles.inputGroupFull}>
                            <div className={styles.mandatoryContainer}>
                                <div className={styles.label}>Team Name</div>
                                <span className={styles.mandatoryField}>*</span>
                            </div>
                            <Input
                                id="content"
                                type="text"
                                inputStyle={styles.input}
                                value={teamName}
                                autofocus={false}
                                callback={(e) => setTeamName(e)}
                            />
                        </div>
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
                                <div className={styles.label}>Coach Name</div>
                                <span className={styles.mandatoryField}>*</span>
                            </div>
                            <Input
                                id="content"
                                type="text"
                                inputStyle={styles.input}
                                value={coachName}
                                autofocus={false}
                                callback={(e) => setCoachName(e)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.mandatoryContainer}>
                                <div className={styles.label}>Coach Email ID</div>
                                <span className={styles.mandatoryField}>*</span>
                            </div>
                            <Input
                                id="content"
                                type="text"
                                inputStyle={styles.input}
                                value={coachEmail}
                                autofocus={false}
                                callback={(e) => setCoachEmail(e)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.mandatoryContainer}>
                                <div className={styles.label}>Coach Contact Number</div>
                                <span className={styles.mandatoryField}>*</span>
                            </div>
                            <Input
                                id="content"
                                type="text"
                                inputStyle={styles.input}
                                value={coachContact}
                                autofocus={false}
                                callback={(e) => setCoachContact(e)}
                            />
                        </div>
                        <div className={styles.customExpandableTable}>
                            <div className={styles.mandatoryContainer}>
                                <div className={styles.label}>Players</div>
                                <span className={styles.mandatoryField}>*</span>
                            </div>
                            <table>
                            <thead><tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email ID</th>
                                <th>
                                <Button 
                                    content="Add"
                                    style={styles.smallButton}
                                    isripplerequired={true}
                                    handleClick={() => editTable("add")}
                                    disabled={players.length === 15}
                                />
                                </th>
                            </tr></thead>
                            <tbody>{rowElements}</tbody>
                            </table>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button
                                id="upload"
                                content="Submit"
                                isripplerequired={true}
                                handleClick={() => handleSubmit()}
                                disabled={
                                    teamName === "" ||
                                    !ageGroup ||
                                    coachName === "" ||
                                    coachEmail === "" ||
                                    players.length === 0
                                }
                            />
                </div>
                    </div>
                </div>
            </div>);
}

const mapStateToProps = (state) => {
    return {
        teamFormData: state.teamForm,
    };
};

export default connect(mapStateToProps)(TeamRegistration);