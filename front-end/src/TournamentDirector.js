import React, { useEffect, useState, useLayoutEffect } from "react";
import classNames from "classnames";
import { DataGrid } from "@mui/x-data-grid";
import { connect } from "react-redux";
import * as tournamentActions from "./actions/tournamentDirectorAction";
import Button from "./Button";
import styles from "./TournamentDirector.module.css";

const columns = [
    {
        field: "id",
        headerName: "Tournament ID",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "name",
        headerName: "Tournament Name",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "age_group",
        headerName: "Age Group",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "gender",
        headerName: "Gender",
        description: "This column has a value of the genders of the match.",
        flex: 1,
        headerClassName: "columnStyle",
    }
]

const columns2 = [
    {
        field: "id",
        headerName: "Match ID",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "displayValue",
        headerName: "Match Name",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "home",
        headerName: "Team 1",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "away",
        headerName: "Team 2",
        flex: 1,
        headerClassName: "columnStyle",
    }
]

const TournamentDirector = props => {

    const [tournamentData, setTournamentData] = useState([])
    const [showTournamentPopUp, setShowTournamentPopupFlag] = useState(false)
    const [selectedTournamentData, setSelectedTournamentData] = useState(null)

    const escFunction = event => {
        // for escaping the from using escape key
        if (event.keyCode === 27) {
            setSelectedTournamentData(null);
            setShowTournamentPopupFlag(false);
        }
      };

    useEffect(()=> {
        document.addEventListener("keydown", escFunction, false);
    }, [])

    useLayoutEffect(() => {
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [])

    useEffect(()=> {
        props.dispatch(tournamentActions.resetTournamentData());
        props.dispatch(tournamentActions.startGetTournamentDataLoader());
        props.dispatch(tournamentActions.getTournamentData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=> {
        if(props.tournament.tournamentsData){
            setTournamentData(props.tournament.tournamentsData);
        }
    }, [props.tournament.tournamentsData]);

    useEffect(()=> {
        if(props.tournament.selectedTournamentData){
            const matches = [];
            props.tournament.selectedTournamentData.rounds.forEach(round => {
                matches.push(...round.matches);
            })
            const selectedTournamentData = {...props.tournament.selectedTournamentData, matches}
            setSelectedTournamentData(selectedTournamentData);
        }
    }, [props.tournament.selectedTournamentData]);

    const handleRowClick = rowObject => {
        props.dispatch(tournamentActions.resetSelectedTournamentData());
        props.dispatch(tournamentActions.startGetSelectedTournamentDataLoader());
        props.dispatch(tournamentActions.getSelectedTournamentData(rowObject.id, setShowTournamentPopupFlag));
    }

    return (
    <>
        {showTournamentPopUp && selectedTournamentData && <div className={styles.overlay}>
            <div className={styles.tournamentSchedulePopupContainer}>
                <div className={classNames(styles.titleDiv, styles.textAlignCenter)}>
                    {selectedTournamentData.name}'s Schedule
                </div>
                <div className={styles.tournamentSchedulePopupBody}>
                    <DataGrid
                        rows={selectedTournamentData.matches}
                        columns={columns2}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </div>
                <div className={styles.closeButtonContainer}>
                    <Button
                            id="close"
                            content="Close"
                            isripplerequired={true}
                            handleClick={(e) => {
                                setSelectedTournamentData(null);
                                setShowTournamentPopupFlag(false);
                            }}
                            style={styles.smallButton}
                    />
                </div>
            </div>
        </div>}
        <div className={styles.tournamentDirectorContainer}>
                <div className={styles.titleDiv}>
                    Tournament Director
                </div>
            <div className={styles.tournamentDirectorBody}>
                <DataGrid
                    onRowClick={(params, event) => {
                          event.defaultMuiPrevented = true;
                          handleRowClick(params.row);
                      }}
                    rows={tournamentData}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </div>
    </>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
        tournament: state.tournamentDirector,
    };
};

export default connect(mapStateToProps)(TournamentDirector);