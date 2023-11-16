import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as teamActions from "./actions/teamDirectorAction";
import CheckBox from "./CheckBox";
import Button from "./Button";
import styles from "./TeamDirector.module.css";
import { generateUniqueId } from "./utils/Constants";
import DynamicTabs from "./DynamicTabs";

const TeamDirector = props => {

    const [teamsData, setTeamsData] = useState([]);
    const [currentTab, setFlag] = useState(0);

    useEffect(()=> {
        props.dispatch(teamActions.resetTeamsData());
        props.dispatch(teamActions.startGetTeamsDataLoader());
        props.dispatch(teamActions.getTeamsData("Y"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=> {
        if(props.teams.unapprovedTeamsData){
            const teamsData = props.teams.unapprovedTeamsData.map(team => {
                return {...team, index: generateUniqueId(), isChecked: false};
            });
            setTeamsData(teamsData);
        }
    }, [props.teams.unapprovedTeamsData]);

    const selectTeamData = (e, teamIndex) => {
        const updatedTeams = teamsData.map(team => {
            const updatedTeamObject = {...team};
            if(updatedTeamObject.index === teamIndex){
                updatedTeamObject.isChecked = !updatedTeamObject.isChecked;
            }
            return updatedTeamObject;
        });
        setTeamsData(updatedTeams);
    }

    const handleApprove = () => {
        const teamsToBeApproved = teamsData.filter(team => team.isChecked);
        const ids = teamsToBeApproved.map(team => team.teamId).join();
        props.dispatch(teamActions.resetApproveTeams());
        props.dispatch(teamActions.startTeamApprovalLoader());
        props.dispatch(teamActions.approveTeams(ids));
    }

    const handleTabClick = tabIndex => {
        setTeamsData([]);
        setFlag(tabIndex);
        props.dispatch(teamActions.resetTeamsData());
        props.dispatch(teamActions.startGetTeamsDataLoader());
        props.dispatch(teamActions.getTeamsData(tabIndex === 1 ? "N" : "Y"));
    }

    const rowElements = teamsData.map(team => {
        const {index, isChecked, teamId, teamname, ageGroup, gender, coachName, contactNumber, coachEmail} = team;
        return (
            <tr className={styles.tr}>
                {currentTab === 1 && <td>
                    <CheckBox
                        key={index}
                        isChecked={isChecked}
                        onChecked={event => selectTeamData(event, index)}
                    />
                </td>}
                <td>{teamId}</td>
                <td>{teamname}</td>
                <td>{ageGroup}</td>
                <td>{gender}</td>
                <td>{coachName}</td>
                <td>{contactNumber}</td>
                <td>{coachEmail}</td>
            </tr>
        );
    });
    return (
        <div className={styles.tournamentDirectorContainer}>
                <div className={styles.titleDiv}>
                    Team Director
                </div>
            <div className={styles.tournamentDirectorBody}>
                <DynamicTabs
                    changeTab={(tabIndex) => handleTabClick(tabIndex)}
                    currentTab={currentTab}
                    tabs={[{id: 0, name: "Approved Teams", index: 0}, {id: 1, name: "Unapproved Teams", index: 1}]}
                />
                {teamsData.length > 0 ? <table>
                    <thead><tr className={styles.tr}>
                        {currentTab === 1 && <th className={styles.th}>Select</th>}
                        <th className={styles.th}>Team ID</th>
                        <th className={styles.th}>Team Name</th>
                        <th className={styles.th}>Age Group</th>
                        <th className={styles.th}>Gender</th>
                        <th className={styles.th}>Coach Name</th>
                        <th className={styles.th}>Coach Number</th>
                        <th className={styles.th}>Coach Email ID</th>
                    </tr></thead>
                    <tbody>{rowElements}</tbody>
                </table> : <div className={styles.noRecords}>No Records Found</div>}
            </div>
            {currentTab === 1 && <div className={styles.buttonContainer}>
                <Button
                    id="approve"
                    content="Approve"
                    isripplerequired={true}
                    handleClick={() => handleApprove()}
                    disabled={teamsData.filter(team => team.isChecked).length === 0}
                />
            </div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
        teams: state.teamDirector,
    };
};

export default connect(mapStateToProps)(TeamDirector);