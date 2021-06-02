import React, { useEffect, useState, useRef } from 'react';

import moment from 'moment';
import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import StopWatch from '../sections/Stopwatch';
import TimesheetTable from '../sections/TimesheetTable';

import billingPeriodRecordServices from '../../services/billingPeriodRecordServices'
import TimesheetTotalTime from '../sections/TimesheetTotalTime';

function Timesheet() {

    const _isMounted = useRef(true);
    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Timesheet", path: "/timesheet", isActive: true }
    ];

    const [records, setRecords] = useState([]);

    useEffect(() => {
        getBillingPeriodRecords();
        return () => _isMounted.current = false;
    }, []);

    const getBillingPeriodRecords = () => {
        if(!_isMounted.current) return; 
        billingPeriodRecordServices.getByBillingPeriodId(1)
        .then(records => setRecords(records.data.data ? records.data.data : []))
        .catch(err => console.error(err));
    };

    /* Save Billing Period Record */
    const saveBillingRecord = (start, stop) => {
        billingPeriodRecordServices.save({ billing_period_id: 1, time_start: moment(start).utc(), time_end: moment(stop).utc() })
        .then(() => getBillingPeriodRecords())
        .catch(err => console.error(err));
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
                <TimesheetTable getBillingPeriodRecords={getBillingPeriodRecords} rows={records} />
                </Col>
            </Row>
            {records.length > 0 ? <TimesheetTotalTime records={records} /> : ''}
            </Container>
        </div>
    );
};

export default Timesheet;