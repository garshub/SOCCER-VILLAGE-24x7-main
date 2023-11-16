import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as fieldActions from "./actions/fieldDirectorAction";
import Input from "./input";
import Button from "./Button";
import styles from "./FieldDirector.module.css";
import { generateUniqueId } from "./utils/Constants";
import DynamicTabs from "./DynamicTabs";

const FieldDirector = props => {

    const [matchesForVenueUpdation, setMatchesForVenueUpdation] = useState([]);
    const [matchesForScoreUpdation, setMatchesForScoreUpdation] = useState([]);
    const [matchesForRefereeUpdation, setMatchesForRefereeUpdation] = useState([]);
    const [currentTab, setFlag] = useState(0);
    // const showingVenueTab = currentTab === 0;

    useEffect(()=> {
        props.dispatch(fieldActions.resetMatchesData());
        props.dispatch(fieldActions.startGetMatchesDataLoader());
        props.dispatch(fieldActions.getMatchesData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=> {
        if(props.matches.matchesData){
            const matchesForVenueUpdation = []
            const matchesForScoreUpdation = []
            const matchesForRefereeUpdation = []
            props.matches.matchesData.forEach(match => {
                if(!match.venue) {
                    matchesForVenueUpdation.push({...match, index: generateUniqueId(), isUpdated: false});
                } else if(!match.referee) {
                    matchesForRefereeUpdation.push({...match, index: generateUniqueId(), isUpdated: false});
                } else if(!match.winner) {
                    matchesForScoreUpdation.push({...match, index: generateUniqueId(), isUpdated: false});
                }
            });
            setMatchesForVenueUpdation(matchesForVenueUpdation);
            setMatchesForScoreUpdation(matchesForScoreUpdation)
            setMatchesForRefereeUpdation(matchesForRefereeUpdation);
        }
    }, [props.matches.matchesData]);

    const handleUpdate = () => {
        if(currentTab === 0){
            const matchesToBeUpdated = matchesForVenueUpdation.filter(match => match.isUpdated);
            const matchesArray = matchesToBeUpdated.map(match => {
                return { matchId: match.id, venue: match.venue };
            });
            const payload = {matchVenueKeys: matchesArray}
            props.dispatch(fieldActions.resetUpdateMatches());
            props.dispatch(fieldActions.startMatchUpdationLoader());
            props.dispatch(fieldActions.updateVenues(payload));
        } else if(currentTab === 1){
            const matchesToBeUpdated = matchesForScoreUpdation.filter(match => match.isUpdated);
            const payload = matchesToBeUpdated.map(match => {
                return {matchID: match.id, team1Score: match.scoreTeam1, team2Score: match.scoreTeam2};
            });
            props.dispatch(fieldActions.resetUpdateMatches());
            props.dispatch(fieldActions.startMatchUpdationLoader());
            props.dispatch(fieldActions.updateMatchScores(payload));
        } else if(currentTab === 2){
            const matchesToBeUpdated = matchesForRefereeUpdation.filter(match => match.isUpdated);
            const payload = matchesToBeUpdated.map(match => {
                return {matchID: match.id, referee: match.referee};
            });
            props.dispatch(fieldActions.resetUpdateMatches()); //WIP
            props.dispatch(fieldActions.startMatchUpdationLoader());
            props.dispatch(fieldActions.updateReferee(payload));
        }
    }

    const handleTabClick = tabIndex => {
        setFlag(tabIndex);
    }

    const editTable = (operation, rowObject = {}, newValue = "") => {
        let updatedMatchesObject = currentTab === 0 ? [...matchesForVenueUpdation] : currentTab === 1 ? [...matchesForScoreUpdation] : [...matchesForRefereeUpdation];
        const rowToBeupdated = updatedMatchesObject.filter(match => match.index === rowObject.index)[0];
        if(rowToBeupdated) {
            updatedMatchesObject = updatedMatchesObject.map(match => {
                    const updatedObject = {...match};
                    if(match.index === rowObject.index){
                        updatedObject[operation] = newValue;
                        updatedObject.isUpdated = true;
                    }
                    return updatedObject;
                });
        }
        if(currentTab === 0)
            setMatchesForVenueUpdation(updatedMatchesObject);
        else if(currentTab === 1)
            setMatchesForScoreUpdation(updatedMatchesObject);
        else if(currentTab === 2)
            setMatchesForRefereeUpdation(updatedMatchesObject);
    }


    const venueUpdationHeadings = ["Match ID", "Display Name", "Team 1", "Team 2", "Round", "Referee", "Venue"];

    const venueUpdationRowElements = matchesForVenueUpdation.map(match => {
        const {displayValue, id, referee, round, team1Name, team2Name, venue} = match;
        return (
            <tr className={styles.tr}>
                <td>{id}</td>
                <td>{displayValue}</td>
                <td>{team1Name}</td>
                <td>{team2Name}</td>
                <td>{round}</td>
                <td>{referee}</td>
                <td>
                    <Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={venue}
                    autofocus={false}
                    callback={(e) => editTable("venue", match, e)}
                />
                </td>
            </tr>
        );
    });

    const scoreUpdationHeadings = ["Match ID", "Display Name", "Team 1", "Team 2", "Round", "Referee", "Venue", "Team 1 Score", "Team 2 Score"];

    const scoreUpdationRowElements = matchesForScoreUpdation.map(match => {
        const {displayValue, id, referee, round, scoreTeam1, scoreTeam2, team1Name, team2Name, venue } = match;
        return (
            <tr className={styles.tr}>
                <td>{id}</td>
                <td>{displayValue}</td>
                <td>{team1Name}</td>
                <td>{team2Name}</td>
                <td>{round}</td>
                <td>{referee}</td>
                <td>{venue}</td>
                <td><Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={scoreTeam1}
                    autofocus={false}
                    callback={(e) => editTable("scoreTeam1", match, e)}
                /></td>
                <td><Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={scoreTeam2}
                    autofocus={false}
                    callback={(e) => editTable("scoreTeam2", match, e)}
                /></td>
            </tr>
        );
    });

    const refereeUpdationHeadings = ["Match ID", "Display Name", "Team 1", "Team 2", "Round", "Venue", "Referee"];

    const refereeUpdationRowElements = matchesForRefereeUpdation.map(match => {
        const {displayValue, id, round, team1Name, team2Name, venue, referee } = match;
        return (
            <tr className={styles.tr}>
                <td>{id}</td>
                <td>{displayValue}</td>
                <td>{team1Name}</td>
                <td>{team2Name}</td>
                <td>{round}</td>
                <td>{venue}</td>
                <td>
                    <Input
                    id="content"
                    type="text"
                    inputStyle={styles.input}
                    inputGroupStyle={styles.noMargin}
                    value={referee}
                    autofocus={false}
                    callback={(e) => editTable("referee", match, e)}
                />
                </td>
            </tr>
        );
    });

    const dataToBeShown = currentTab === 0 ? matchesForVenueUpdation : currentTab === 1 ? matchesForScoreUpdation : matchesForRefereeUpdation;
    const headingsToBeShown = currentTab === 0 ? venueUpdationHeadings : currentTab === 1 ? scoreUpdationHeadings : refereeUpdationHeadings;
    const rowsToBeShown = currentTab === 0 ? venueUpdationRowElements : currentTab === 1 ? scoreUpdationRowElements : refereeUpdationRowElements;
    return (
        <div className={styles.tournamentDirectorContainer}>
                <div className={styles.titleDiv}>
                    Field Director
                </div>
            <div className={styles.tournamentDirectorBody}>
                <DynamicTabs
                    changeTab={(tabIndex) => handleTabClick(tabIndex)}
                    currentTab={currentTab}
                    tabs={[{id: 0, name: "Update Venues", index: 0}, {id: 2, name: "Update Referee", index: 2}, {id: 1, name: "Update Scores", index: 1}]}
                />
                {dataToBeShown.length > 0 ? <table>
                    <thead><tr className={styles.tr}>
                        {headingsToBeShown.map(heading => <th className={styles.th}>{heading}</th>)}
                    </tr></thead>
                    <tbody>{rowsToBeShown}</tbody>
                </table> : <div className={styles.noRecords}>No Records Found</div>}
            </div> 
            <div className={styles.buttonContainer}>
                <Button
                    id="update"
                    content="Update"
                    isripplerequired={true}
                    handleClick={() => handleUpdate()}
                    disabled={dataToBeShown.filter(obj => obj.isUpdated).length === 0}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
        matches: state.fieldDirector,
    };
};

export default connect(mapStateToProps)(FieldDirector);