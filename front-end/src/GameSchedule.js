import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./gameSchedule.css";
import { DataGrid } from "@mui/x-data-grid";

const matches2 = [
    {
        matches: [
            { id: "1", home: "TBD", away: "TBD", displayValue: "TBD" },
            { id: "2", home: "TBD", away: "TBD", displayValue: "TBD" },
        ],
        displayValue: "TBD",
    },
    {
        matches: [
            { id: "3", home: "TBD", away: "TBD", displayValue: "TBD" },
            { id: "4", home: "TBD", away: "TBD", displayValue: "TBD" },
        ],
        displayValue: "TBD",
    },
    {
        matches: [
            { id: "5", home: "TBD", away: "TBD", displayValue: "TBD" },
            { id: "6", home: "TBD", away: "TBD", displayValue: "TBD" },
        ],
        displayValue: "TBD",
    },
];
const columns = [
    {
        field: "id",
        headerName: "Match ID",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "home",
        headerName: "Home Team",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "away",
        headerName: "Away Team",
        flex: 1,
        headerClassName: "columnStyle",
    },
    {
        field: "displayValue",
        headerName: "Match Details",
        description: "This column will display the details of the match.",
        flex: 1,
        headerClassName: "columnStyle",
    },
    // {
    //     field: "date",
    //     headerName: "Match Date",
    //     description: "This column has a value of the date of the match.",
    //     flex: 1,
    //     headerClassName: "columnStyle",
    // },
    // {
    //     field: "venue",
    //     headerName: "Match Venue",
    //     description: "This column has a value of the date of the match.",
    //     flex: 1,
    //     headerClassName: "columnStyle",
    // },
];

const DataTable = (props) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        let matches;
        if (props.schedulerForm.schedulerFormSubmitData) {
            matches = props.schedulerForm.schedulerFormSubmitData.rounds;
        } else {
            matches = matches2;
        }

        var newMatchArray = [];
        var newMatchArray_1 = [];
        for (let x in matches) {
            newMatchArray.push(matches[x].matches);
            console.log(matches[x].matches);
        }
        newMatchArray.forEach((m) => m.forEach((x) => newMatchArray_1.push(x)));

        setRowData(newMatchArray_1);
    }, [props.schedulerForm.schedulerFormSubmitData]);

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div className="schedulerContainer1">
                <div className="schedulerFormBody">
                    <div className="titleDiv">TOURNAMENT SCHEDULE </div>
                    <DataGrid
                        rows={rowData}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        className={rowData}
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

export default connect(mapStateToProps)(DataTable);
