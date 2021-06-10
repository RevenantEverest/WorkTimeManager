import React, { useState, useEffect, useRef } from 'react';
import {
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import BillingPeriod from './BillingPeriod';

import billingPeriodServices from '../../services/billingPeriodServices';

function ProjectBillingPeriods(props) {

    const _isMounted = useRef(true);
    const project = props.project;
    const [billingPeriods, setBillingPeriods] = useState(null);


    useEffect(() => {
        getProjectBillingPeriods();
        return () => _isMounted.current = false;
    }, []);

    const getProjectBillingPeriods = () => {
        billingPeriodServices.getByProjectId(project.id)
        .then(results => setBillingPeriods(results.data.data))
        .catch(err => console.error(err));
    };

    const renderBillingPeriods = () => {
        
        let BillingPeriods = billingPeriods.map((el, idx) => {
            return(
                <Col key={idx} lg="4" className="mb-4">
                <BillingPeriod billingPeriodData={el} />
                </Col>
            );
        });

        return(
            <Row className="mt-5">
            {BillingPeriods}
            </Row>
        );
    };

    return billingPeriods ? renderBillingPeriods() : null;
};

export default ProjectBillingPeriods;