import React, { useState } from 'react';

import moment from 'moment';
import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import StopWatch from '../sections/Stopwatch';
import TimesheetTable from '../sections/TimesheetTable';

function Timesheet() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Timesheet", path: "/timesheet", isActive: true }
    ];

    const [rows, setRows] = useState([]);

    const getStartStopValues = (start, stop) => {
        rows.push({ title: "", timeStart: start, timeEnd: stop });
        setRows([...rows]);
    };

    

    const renderTotalTime = () => {
        let rowTimeDif = rows.map(el => {
            let ts = moment(el.timeStart, "YYYY-M-DD HH:mm:ss");
            let te = moment(el.timeEnd, "YYYY-M-DD HH:mm:ss");

            return (te.diff(ts, 'seconds') / 60) / 60;
        });

        let totalTimeInHours = 0;
        rowTimeDif.forEach(el => totalTimeInHours = totalTimeInHours + el);

        return(
            <Row>
            <Col>
                <MDBCard>
                <MDBCardBody className="card-body-light text-white">
                <div style={{ float: "left" }}>
                <p className="d-inline f-700">Total: </p>
                <p className="d-inline">{totalTimeInHours.toFixed(2)}</p>
                </div>
                <div style={{ float: "right" }}>
                <p className="d-inline f-700">Current Amount Due: </p>
                <p className="d-inline">{totalTimeInHours.toFixed(2) * 20}</p>
                </div>
                </MDBCardBody>
                </MDBCard>
            </Col>
            </Row>
        );
    };

    return(
        <div id="Timesheet">
            <Container>
            <Row>
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                <StopWatch getStartStopValues={getStartStopValues} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <TimesheetTable rows={rows} />
                </Col>
            </Row>
            {rows.length > 0 ? renderTotalTime() : ''}
            </Container>
        </div>
    );
};

export default Timesheet;