import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBModal,
    MDBModalBody,
    MDBBtn
} from 'mdbreact';

import billingPeriodRecordServices from '../../services/billingPeriodRecordServices';

function DeleteBillingPeriodModal(props) {

    const handleDelete = () => {
        billingPeriodRecordServices.delete(props.billingPeriodRecordData.id)
        .then(() => {
            props.toggle();
            setTimeout(() => props.getBillingPeriodRecords(), 200);
        })
        .catch(err => console.error(err));
    };

    return(
        <MDBModal isOpen={props.modal} toggle={props.toggle} size="lg" centered>
        <MDBModalBody className="text-white">
            <Container>
            <Row className="mb-5">
                <Col>
                <h4 className="d-inline">Are you sure you want to delete Billing Period Record {props.billingPeriodRecordData.id}?</h4>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                <MDBBtn color="blue darken-3" className="ml-0" size="md" onClick={() => handleDelete()}>Delete</MDBBtn>
                <MDBBtn color="grey" className="ml-0" size="md" onClick={() => props.toggle()}>Close</MDBBtn>
                </Col>
            </Row>
            </Container>
        </MDBModalBody>
        </MDBModal>
    );
};

export default DeleteBillingPeriodModal;