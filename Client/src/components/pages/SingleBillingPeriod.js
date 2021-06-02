import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import TimesheetBillingPeriodCard from '../sections/TimehseetBillingPeriodCard';
import BillingPeriodRecords from '../sections/BillingPeriodRecords';

import billingPeriodServices from '../../services/billingPeriodServices';

function SingleBillingPeriod(props) {

    const _isMounted = useRef(false);
    const projectId = window.location.pathname.split("/projects/")[1].split("/billing_periods/")[0];
    const billingPeriodId = window.location.pathname.split("/billing_periods/")[1];
    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: projectId, path: `/projects/${projectId}` },
        { name: "Billing Periods", path: `/projects/${projectId}` },
        { name: billingPeriodId, path: `/projects/${projectId}/billing_periods/${billingPeriodId}`, isActive: true }
    ];
    const [billingPeriod, setBillingPeriod] = useState(null);

    useEffect(() => {
        if(props.location.state) setBillingPeriod(props.location.state.projectData);
        else getBillingPeriod();

        return () => _isMounted.current = false;
    }, []);

    const getBillingPeriod = () => {
        billingPeriodServices.getOne(parseInt(billingPeriodId, 10))
        .then(results => setBillingPeriod(results.data.data))
        .catch(err => console.error(err));
    };

    const renderBillingPeriodInfo = () => {
        return(
            <Row className="mt-4">
            <Col>
                <TimesheetBillingPeriodCard billingPeriod={billingPeriod} />
            </Col>
            </Row>
        );
    };

    const renderRecords = () => {
        return(
            <Row>
            <Col>
                <BillingPeriodRecords billingPeriod={billingPeriod} />
            </Col>
            </Row>
        );
    };

    return(
        <div id="SingleBillingPeriod">
            <Container>
            <Row>
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            {billingPeriod ? renderBillingPeriodInfo() : ''}
            {billingPeriod ? renderRecords() : ''}
            </Container>
        </div>
    );
};

export default SingleBillingPeriod;