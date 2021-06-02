import React, { useEffect, useState, useRef } from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';
import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import StopWatch from '../sections/Stopwatch';
import TimesheetTable from '../sections/TimesheetTable';
import TimesheetTotalTime from '../sections/TimesheetTotalTime';
import CreateBillingPeriod from '../sections/CreateBillingPeriod';

import billingPeriodServices from '../../services/billingPeriodServices';
import billingPeriodRecordServices from '../../services/billingPeriodRecordServices';
import TimesheetBillingPeriodCard from '../sections/TimehseetBillingPeriodCard';

function Timesheet() {

    const _isMounted = useRef(true);
    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Timesheet", path: "/timesheet", isActive: true }
    ];

    const currentProject = useSelector(state => state.currentProject);
    const [currentBillingPeriod, setCurrentBillingPeriod] = useState(null);
    const [records, setRecords] = useState([]);

    /* Component Did Mount */
    useEffect(() => {
        getLatestBillingPeriod();
        return () => _isMounted.current = false;
    }, []);

    /* Component Did Update for currentProject */
    useEffect(() => {
        getLatestBillingPeriod(); 
    }, [currentProject]);

    /* Callback for setCurrentBillingPeriod */
    useEffect(() => {
        getBillingPeriodRecords();
    }, [currentBillingPeriod]);

    const getLatestBillingPeriod = () => {
        if(!currentProject) return;
        billingPeriodServices.getByProjectId(currentProject.id)
        .then(billingPeriods => {
            if(_isMounted.current) {
                let recentBillingPeriod = billingPeriods.data.data.filter(el => !el.end_date)[0];
                console.log(recentBillingPeriod);
                setCurrentBillingPeriod(recentBillingPeriod);
            }
        })
        .catch(err => console.error(err));
    };

    const getBillingPeriodRecords = () => {
        if(!currentBillingPeriod) return;
        billingPeriodRecordServices.getByBillingPeriodId(currentBillingPeriod.id)
        .then(records => {
            if(_isMounted.current) setRecords(records.data.data ? records.data.data : [])
        })
        .catch(err => console.error(err));
    };

    /* Save Billing Period Record */
    const saveBillingRecord = (start, stop) => {
        let data = {
            billing_period_id: currentBillingPeriod.id,
            time_start: moment(start).utc(),
            time_end: moment(stop).utc()
        };

        billingPeriodRecordServices.save(data)
        .then(() => getBillingPeriodRecords())
        .catch(err => console.error(err));
    };

    const renderTimesheet = () => {
        return(
            <div>
            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                <TimesheetBillingPeriodCard canClose billingPeriod={currentBillingPeriod} getLatestBillingPeriod={getLatestBillingPeriod} />
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
            </div>
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
            {!currentProject ? <p className="white-text">Loading...</p> : ''}
            {currentProject && currentBillingPeriod ? renderTimesheet() : ''}
            {
                currentProject && !currentBillingPeriod ? 
                <CreateBillingPeriod 
                className="mt-4" 
                getLatestBillingPeriod={getLatestBillingPeriod}
                /> :
                ''
            }
            </Container>
        </div>
    );
};

export default Timesheet;