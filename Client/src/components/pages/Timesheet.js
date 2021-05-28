import React, { useEffect, useState } from 'react';

import moment from 'moment';
import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import StopWatch from '../sections/Stopwatch';
import TimesheetTable from '../sections/TimesheetTable';

import billingPeriodRecordServices from '../../services/billingPeriodRecordServices'

function Timesheet() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Timesheet", path: "/timesheet", isActive: true }
    ];

    const [records, setRecords] = useState([]);

    useEffect(() => {
        console.log(new Date())
        getBillingPeriodRecords();
    }, []);

    const getBillingPeriodRecords = () => {
        billingPeriodRecordServices.getByBillingPeriodId(1)
        .then(records => setRecords(records.data.data ? records.data.data : []))
        .catch(err => console.error(err));
    };

    const saveBillingRecord = (start, stop) => {
        billingPeriodRecordServices.save({ billing_period_id: 1, time_start: moment(start), time_end: moment(stop) })
        .then(() => getBillingPeriodRecords())
        .catch(err => console.error(err));
    };

    const renderTotalTime = () => {
        let recordTimeDif = records.map(el => {
            let ts = moment.utc(el.time_start.toString(), "YYYY-M-DD HH:mm:ss");
            let te = moment.utc(el.time_end.toString(), "YYYY-M-DD HH:mm:ss");

            return (te.diff(ts, 'seconds') / 60) / 60;
        });

        let totalTimeInHours = 0;
        recordTimeDif.forEach(el => totalTimeInHours = totalTimeInHours + el);

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
                <MDBCard className="w-100">
                <MDBCardBody className="card-body-light white-text">
                    <Row>
                    <Col lg="10">
                        <h6 className="d-inline">Billing Period for </h6>
                        <h6 className="d-inline wtm-text">The Foundation for Critical Thinking</h6>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div>
                        <MDBIcon icon="clock" />
                        <p className="d-inline ml-2">{moment().format("M/DD/YYYY")}</p>
                        </div>
                    </Col>
                    </Row>
                </MDBCardBody>
                </MDBCard>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                <StopWatch getStartStopValues={saveBillingRecord} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <TimesheetTable rows={records} />
                </Col>
            </Row>
            {records.length > 0 ? renderTotalTime() : ''}
            </Container>
        </div>
    );
};

export default Timesheet;