import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBModal,
    MDBModalBody,
    MDBBtn
} from 'mdbreact';

import projectServices from '../../services/projectServices';

function DeleteProjectModal(props) {

    const handleDelete = () => {
        projectServices.delete(props.projectData.id)
        .then(() => {
            props.toggle();
            setTimeout(() => props.getProjects(), 200);
        })
        .catch(err => console.error(err));
    };

    return(
        <MDBModal isOpen={props.modal} toggle={props.toggle} size="lg" centered>
        <MDBModalBody className="text-white">
            <Container>
            <Row className="mb-5">
                <Col>
                <h4 className="d-inline">Are you sure you want to delet project: </h4>
                <h4 className="d-inline wtm-text f-500">{props.projectData.name}</h4>
                <h4 className="d-inline">?</h4>
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

export default DeleteProjectModal;