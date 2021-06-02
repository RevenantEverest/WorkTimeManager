import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import {
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

import CloseBillingPeriod from './CloseBillingPeriod';

import projectServices from '../../services/projectServices';

function TimesheetBillingPeriodCard(props) {

    const _isMounted = useRef(true);
    const billingPeriod = props.billingPeriod;
    const [project, setProject] = useState(null);

    useEffect(() => {
        getProject();
        return () => _isMounted.current = false;
    }, []);

    const getProject = () => {
        projectServices.getOne(billingPeriod.project_id)
        .then(results => setProject(results.data.data))
        .catch(err => console.error(err));
    };

    const renderEndDate = () => {
        return(
            <div className="d-inline">
            <p className="d-inline">  -</p>
            <p className="d-inline ml-2">{moment(billingPeriod.start_date.toString()).format("MMM Do YYYY")}</p>
            </div>
        );
    };

    return(
        <MDBCard className="w-100">
        <MDBCardBody className="card-body-light white-text">
            <Row>
            <Col>
                <h6 className="d-inline">Billing Period for </h6>
                <h6 className="d-inline wtm-text">{project ? project.name : ''}</h6>
            </Col>
            <Col className="d-flex justify-content-end">
                <div>
                <MDBIcon icon="clock" />
                <p className="d-inline ml-2">{moment(billingPeriod.start_date.toString()).format("MMM Do YYYY")}</p>
                {props.canClose ? <CloseBillingPeriod billingPeriod={billingPeriod} getLatestBillingPeriod={props.getLatestBillingPeriod} /> : ''}
                {billingPeriod.end_date ? renderEndDate() : ''}
                </div>
            </Col>
            </Row>
        </MDBCardBody>
        </MDBCard>
    );
};

export default TimesheetBillingPeriodCard;