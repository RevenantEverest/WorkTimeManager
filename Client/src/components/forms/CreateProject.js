import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';

import projectServices from '../../services/projectServices';

function CreateProject() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Create", path: "/projects/create", isActive: true },
    ];
    const [fireRedirect, setFireRedirect] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (e) => setName(e.target.value); 
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            user_id: 1,
            name: name,
            description: description,
            created_at: new Date()
        };

        projectServices.save(data)
        .then(() => setFireRedirect(true))
        .catch(err => console.error(err));
    };

    return(
        <div id="CreateProject">
            <Container>
            <Row>
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
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
                </Col>
            </Row>
            </Container>
            {fireRedirect ? <Redirect to="/projects" /> : ""}
        </div>
    );
};

export default CreateProject;