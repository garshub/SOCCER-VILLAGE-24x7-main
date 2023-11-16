import React, { useState, useLayoutEffect, useEffect } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { DataGrid } from "@mui/x-data-grid";
import Input from "./input";
import * as refereeFormActions from "./actions/refereeRegistrationActions";
import Button from "./Button";
import styles from "./RefereeRegistration.module.css";

	
const columns = [
        {
            field: "displayValue",
            headerName: "Match Name",
            flex: 1,
            headerClassName: "columnStyle",
        },
        {
            field: "team1Name",
            headerName: "Team 1",
            flex: 1,
            headerClassName: "columnStyle",
        },
        {
            field: "team2Name",
            headerName: "Team 2",
            flex: 1,
            headerClassName: "columnStyle",
        },
        {
            field: "venue",
            headerName: "Venue",
            flex: 1,
            headerClassName: "columnStyle",
        },
    ];

const RegisterReferee = (props) => {
    const [name, setRefereeName] = useState("");
    const [email, setRefereeEmail] = useState("");
    const [contact, setRefereeContact] = useState("");
    const [refereeID, setRefereeID] = useState("");
    const [registeredRefereeID, setRegisteredRefereeID] = useState("");
    const [showRefereeSchedule, setShowRefereeScheduleFlag] = useState(false);
    const [refereeSchedule, setRefereeSchedule] = useState([]);

    const handleRegistredRefereeIdSubmit = () => {
        props.dispatch(refereeFormActions.resetRefereeScheduleData());
        props.dispatch(refereeFormActions.startGetRefereeScheduleDataLoader());
        props.dispatch(refereeFormActions.getRefereeScheduleData({name: registeredRefereeID}, setShowRefereeScheduleFlag));
    }

    const escFunction = event => {
        // for escaping the from using escape key
        if (event.keyCode === 27) {
          setRegisteredRefereeID("");
          setShowRefereeScheduleFlag(false);
        }
      };

    useEffect(()=> {
        document.addEventListener("keydown", escFunction, false);
    }, [])

    useLayoutEffect(() => {
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, []);

    useEffect(() => {
        if(props.refereeFormData.refereeScheduleData) {
            const matchesToBeShown = props.refereeFormData.refereeScheduleData.filter(match => !match.winner);
            setRefereeSchedule(matchesToBeShown);
        }
    }, [props.refereeFormData.refereeScheduleData]);

    const handleSubmit = () => {
        const response = {
            name,
            email,
            refereeID,
            contact,
        };
        props.dispatch(refereeFormActions.resetSubmitRefereeData());
        props.dispatch(refereeFormActions.startSubmitRefereeDataLoader());
        props.dispatch(refereeFormActions.submitRefereeData(response));
    };
    return (
    <>
    {showRefereeSchedule && <div className={styles.overlay}>
            <div className={styles.refereeSchedulePopupContainer}>
                <div className={classNames(styles.titleDiv, styles.textAlignCenter)}>
                    {registeredRefereeID}'s Schedule
                </div>
                <div className={styles.refereeSchedulePopupBody}>
                    <DataGrid
                        rows={refereeSchedule}
                        columns={columns}
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
                                setRegisteredRefereeID("");
                                setShowRefereeScheduleFlag(false);
                            }}
                            style={styles.smallButton}
                    />
                </div>
            </div>
        </div>}
        <div className={styles.schedulerContainer}>
            <div className={styles.schedulerFormBodyMajor}>
                <div className={styles.titleDiv}>
                    Welcome to Soccer Village 24x7! To register as a referee
                    please fill the following details:
                </div>
                <div className={styles.schedulerFormDiv}>
                    <div className={styles.inputGroupFull}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Referee Name</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={name}
                            autofocus={false}
                            callback={(e) => setRefereeName(e)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Referee Email ID</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={email}
                            autofocus={false}
                            callback={(e) => setRefereeEmail(e)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>
                                Referee Contact Number
                            </div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={contact}
                            autofocus={false}
                            callback={(e) => setRefereeContact(e)}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Referee ID</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={refereeID}
                            autofocus={false}
                            callback={(e) => setRefereeID(e)}
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
                                name === "" ||
                                email === "" ||
                                contact === "" ||
                                refereeID === ""
                            }
                        />
                    </div>
            </div>
            <div className={styles.schedulerFormBodyMinor}>
                <div className={styles.titleDiv}>
                    Already Registered? Please enter your Referee ID to see your schedule:
                </div>
                <div className={styles.schedulerFormDiv}>
                    <div className={styles.inputGroupFull}>
                        <div className={styles.mandatoryContainer}>
                            <div className={styles.label}>Referee ID</div>
                            <span className={styles.mandatoryField}>*</span>
                        </div>
                        <Input
                            id="content"
                            type="text"
                            inputStyle={styles.input}
                            value={registeredRefereeID}
                            autofocus={false}
                            callback={(e) => setRegisteredRefereeID(e)}
                        />
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                        <Button
                            id="upload"
                            content="Submit"
                            isripplerequired={true}
                            handleClick={() => handleRegistredRefereeIdSubmit()}
                            disabled={registeredRefereeID === ""}
                        />
                    </div>
            </div>
        </div>
    </>
    );
};

const mapStateToProps = (state) => {
    return {
        refereeFormData: state.refereeForm,
    };
};

export default connect(mapStateToProps)(RegisterReferee);
