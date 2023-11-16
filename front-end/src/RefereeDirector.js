import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as refereeActions from "./actions/refereeDirectorAction";
import CheckBox from "./CheckBox";
import Button from "./Button";
import styles from "./TeamDirector.module.css";
import { generateUniqueId } from "./utils/Constants";
import DynamicTabs from "./DynamicTabs";

const RefereeDirector = props => {

    const [refereeData, setRefereeData] = useState([]);
    const [currentTab, setFlag] = useState(0);

    useEffect(()=> {
        props.dispatch(refereeActions.resetRefereeData());
        props.dispatch(refereeActions.getRefereeData("Y"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=> {
        if(props.referee.unapprovedRefereeData){
            const refereeData = props.referee.unapprovedRefereeData.map(referee => {
                return {...referee, index: generateUniqueId(), isChecked: false};
            });
            setRefereeData(refereeData);
        }
    }, [props.referee.unapprovedRefereeData]);

    const selectRefereeData = (e, refereeIndex) => {
        const updatedReferees = refereeData.map(referee => {
            const updatedRefereeObject = {...referee};
            if(updatedRefereeObject.index === refereeIndex){
                updatedRefereeObject.isChecked = !updatedRefereeObject.isChecked;
            }
            return updatedRefereeObject;
        });
        setRefereeData(updatedReferees);
    }

    const handleApprove = () => {
        const refereesToBeApproved = refereeData.filter(referee => referee.isChecked);
        const ids = refereesToBeApproved.map(referee => referee.id).join();
        props.dispatch(refereeActions.resetApproveReferees());
        props.dispatch(refereeActions.approveReferees(ids));
    }

    const handleTabClick = tabIndex => {
        setRefereeData([]);
        setFlag(tabIndex);
        props.dispatch(refereeActions.resetRefereeData());
        props.dispatch(refereeActions.getRefereeData(tabIndex === 1 ? "N" : "Y"));
    }

    const rowElements = refereeData.map(referee => {
        const {index, isChecked, id, name, contact, email} = referee;
        return (
            <tr className={styles.tr}>
                {currentTab === 1 && <td>
                    <CheckBox
                        key={index}
                        isChecked={isChecked}
                        onChecked={event => selectRefereeData(event, index)}
                    />
                </td>}
                <td>{id}</td>
                <td>{name}</td>
                <td>{contact}</td>
                <td>{email}</td>
            </tr>
        );
    });
    return (
        <div className={styles.tournamentDirectorContainer}>
                <div className={styles.titleDiv}>
                    Referee Director
                </div>
            <div className={styles.tournamentDirectorBody}>
                <DynamicTabs
                    changeTab={(tabIndex) => handleTabClick(tabIndex)}
                    currentTab={currentTab}
                    tabs={[{id: 0, name: "Approved Referees", index: 0}, {id: 1, name: "Unapproved Referees", index: 1}]}
                />
                {refereeData.length > 0 ? <table>
                    <thead><tr className={styles.tr}>
                        {currentTab === 1 && <th className={styles.th}>Select</th>}
                        <th className={styles.th}>Referee ID</th>
                        <th className={styles.th}>Referee Name</th>
                        <th className={styles.th}>Referee Number</th>
                        <th className={styles.th}>Referee Email ID</th>
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
                    disabled={refereeData.filter(referee => referee.isChecked).length === 0}
                />
            </div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state,
        referee: state.refereeDirector,
    };
};

export default connect(mapStateToProps)(RefereeDirector);