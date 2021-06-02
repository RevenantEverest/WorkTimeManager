import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import CreateProjectForm from '../forms/CreateProjectForm';

import projectServices from '../../services/projectServices';

function CreateProject() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Create", path: "/projects/create", isActive: true },
    ];
    const [fireRedirect, setFireRedirect] = useState(false);

    const createProject = (data) => {
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
                <CreateProjectForm createProject={createProject} />
                </Col>
            </Row>
            </Container>
            {fireRedirect ? <Redirect to="/projects" /> : ""}
        </div>
    );
};

export default CreateProject;