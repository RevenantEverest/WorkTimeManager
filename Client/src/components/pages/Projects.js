import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import Project from '../sections/Project';

import projectServices from '../../services/projectServices';

function Projects() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects", isActive: true }
    ];
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => getProjects(), []);

    useEffect(() => {
        setLoading(false);
    }, [setProjects]);

    const getProjects = () => {
        projectServices.getByUserId(1)
        .then(projects => setProjects(projects.data.data))
        .catch(err => console.error(err));
    };

    const renderProjects = () => {

        let Projects = projects.map((el, idx) => {
            return(
                <Col lg="4" key={idx}>
                <Project projectData={el} getProjects={getProjects} />
                </Col>
            );
        });

        return(
            <Row className="mt-4">
            {Projects}
            </Row>
        );
    }

    return(
        <div id="Projects">
            <Container>
            <Row>
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                <Link to="/projects/create">
                    <MDBBtn color="blue darken-3" size="md">Create Project</MDBBtn>
                </Link>
                </Col>
            </Row>
            {loading && !projects ? "Loading..." : renderProjects()}
            </Container>
        </div>
    );
};

export default Projects;