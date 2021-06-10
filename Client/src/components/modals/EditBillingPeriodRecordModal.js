import moment from 'moment';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBModal,
    MDBModalBody
} from 'mdbreact';

import EditBillingPeriodRecordForm from '../forms/EditBillingPeriodRecordForm';

import billingPeriodRecordsServices from '../../services/billingPeriodRecordServices';

function EditBillingPeriodRecordModal(props) {

    const bpr = props.billingPeriodRecordData;
    let ts = moment(bpr.time_start.toString(), "YYYY-M-DD HH:mm:ss");
    let te = moment(bpr.time_end.toString(), "YYYY-M-DD HH:mm:ss");

    const updateBillingPeriodRecord = (data) => {
        billingPeriodRecordsServices.update(data)
        .then(() => props.getBillingPeriodRecords())
        .catch(err => console.error(err));
    };

    return(
        <MDBModal isOpen={props.modal} toggle={props.toggle} size="lg" centered>
        <MDBModalBody className="text-white">
            <Container>
            <Row className="mb-5">
                <Col className="d-flex justify-content-center">
                <div>
                <h5 className="d-inline">Editing Billing Period Record for  </h5>
                <h5 className="d-inline wtm-text f-500">{ts.format("M/DD/YYYY HH:mm:ss")}</h5>
                <h5 className="d-inline"> to </h5>
                <h5 className="d-inline wtm-text f-500">{te.format("M/DD/YYYY HH:mm:ss")}</h5>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditBillingPeriodRecordForm 
                    toggle={props.toggle}
                    billingPeriodRecordData={props.billingPeriodRecordData}
                    updateBillingPeriodRecord={updateBillingPeriodRecord}
                    />
                </Col>
            </Row>
            </Container>
        </MDBModalBody>
        </MDBModal>
    );
};

export default EditBillingPeriodRecordModal;