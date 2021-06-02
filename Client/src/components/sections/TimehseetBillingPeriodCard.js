import moment from 'moment';
import { useSelector } from 'react-redux';
import {
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

import CloseBillingPeriod from './CloseBillingPeriod';

function TimesheetBillingPeriodCard(props) {

    const billingPeriod = props.billingPeriod;
    const currentProject = useSelector(state => state.currentProject);

    return(
        <MDBCard className="w-100">
        <MDBCardBody className="card-body-light white-text">
            <Row>
            <Col>
                <h6 className="d-inline">Billing Period for </h6>
                <h6 className="d-inline wtm-text">{currentProject.name}</h6>
            </Col>
            <Col className="d-flex justify-content-end">
                <div>
                <MDBIcon icon="clock" />
                <p className="d-inline ml-2">{moment(billingPeriod.start_date.toString()).format("M/DD/YYYY")}</p>
                <CloseBillingPeriod billingPeriod={billingPeriod} getLatestBillingPeriod={props.getLatestBillingPeriod} />
                </div>
            </Col>
            </Row>
        </MDBCardBody>
        </MDBCard>
    );
};

export default TimesheetBillingPeriodCard;