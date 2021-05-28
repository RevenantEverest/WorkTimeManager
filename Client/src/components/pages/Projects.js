import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';

import projectServices from '../../services/projectServices';

function Projects() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects", isActive: true }
    ];
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        projectServices.getByUserId(1)
        .then(projects => setProjects(projects.data.data))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        console.log(projects);
        setLoading(false);
    }, [setProjects]);

    const renderProjects = () => {

        let Projects = projects.map((el, idx) => {
            return(
                <Col lg={4} key={idx}>
                <MDBCard>
                    <MDBCardImage
                        className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-3 rounded'
                        tag='div'
                    >
                        <h6 className="f-500">{el.name}</h6>
                    </MDBCardImage>
                    <MDBCardBody className="card-body-medium">
                    <p>{el.description}</p>
                    </MDBCardBody>
                    <div className='rounded-bottom text-center pt-3'>
                        <ul className='list-unstyled list-inline font-small'>
                        <li className='list-inline-item pr-2 white-text'>
                            <MDBIcon far icon='clock' /> {moment(el.created_at).format("M/DD/YYYY")}
                        </li>
                        <li className='list-inline-item pr-2'>
                            <MDBBtn size="sm" color="elegant" className="w-100">
                                Select
                            </MDBBtn>
                        </li>
                        <li className='list-inline-item pr-2'>
                            <MDBBtn size="sm" color="blue darken-3" className="w-100">
                                Edit
                            </MDBBtn>
                        </li>
                        </ul>
                    </div>
                </MDBCard>
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