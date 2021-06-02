import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBIcon,
    MDBBtn
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';
import SingleProjectBillingPeriods from '../sections/SingleProjectBillingPeriods';

import projectServices from '../../services/projectServices';

function SingleProject(props) {

    const _isMounted = useRef(false);
    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: window.location.pathname.split("/projects/")[1], path: window.location.pathname.split("/projects/")[1], isActive: true }
    ];
    const [project, setProject] = useState(null);

    useEffect(() => {
        if(props.location.state) setProject(props.location.state.projectData);
        else getProject();

        return () => _isMounted.current = false;
    }, []);

    const getProject = () => {
        let projectId = window.location.pathname.split("/projects/")[1];
        projectServices.getOne(parseInt(projectId, 10))
        .then(results => setProject(results.data.data))
        .catch(err => console.error(err));
    };

    const renderProjectInfo = () => {
        return(
            <Row className="mt-4">
            <Col>
            <MDBCard style={{ height: "250px" }}>
                <MDBCardImage
                    className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-3 rounded'
                    tag='div'
                >
                    <h6 className="f-500">{project.name}</h6>
                </MDBCardImage>
                <MDBCardBody className="card-body-medium">
                <p>{project.description}</p>
                </MDBCardBody>
                <div className='rounded-bottom text-center pt-3 ml-0 mr-0'>
                    <ul className='list-unstyled list-inline font-small'>
                    <li className='list-inline-item pr-2 white-text'>
                        <MDBIcon far icon='clock' /> {moment(project.created_at).format("M/DD/YYYY")}
                    </li>
                    </ul>
                </div>
            </MDBCard>
            </Col>
            </Row>
        );
    };

    return(
        <div id="SingleProject">
            <Container>
            <Row>
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            {project ? renderProjectInfo() : ''}
            {project ? <SingleProjectBillingPeriods project={project} /> : ''}
            </Container>
        </div>
    );
};

export default SingleProject;