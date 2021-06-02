import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn
} from 'mdbreact';

function CreateProjectForm(props) {

    const userData = useSelector(state => state.userData);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (e) => setName(e.target.value); 
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            user_id: userData.id,
            name: name,
            description: description,
            created_at: moment().utc()
        };

        props.createProject(data);
    };

    return(
        <div className="CreateProjectForm">
        <MDBCard className="card-light" narrow>
            <MDBCardHeader 
            className="view view-cascade gradient-card-header blue-gradient py-2 mx-4 mb-3">
                Create Project
            </MDBCardHeader>
            <MDBCardBody className="card-body-light" cascade>
            <Row className="mt-4 d-flex justify-content-center">
                <Col lg={10}>
                <div className="input-dark">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-user prefix" />
                        </span>
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    aria-label="Name" 
                    name="name"
                    aria-describedby="basic-addon"
                    onChange={(e) => handleNameChange(e)}
                    />
                    </div>
                </div>
                </Col>
            </Row>
            <Row className="mt-4 d-flex justify-content-center">
                <Col lg={10}>
                <div className="input-dark">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fas fa-pencil-alt prefix" />
                        </span>
                    </div>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="5"
                    name="description"
                    onChange={(e) => handleDescriptionChange(e)}
                    />
                    </div>
                </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="d-flex justify-content-end" lg={11}>
                    <MDBBtn color="blue darken-3" size="md" onClick={(e) => handleSubmit(e)}>Create</MDBBtn>
                </Col>
            </Row>
            </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default CreateProjectForm;