import React, { useState } from 'react';
import moment from 'moment';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

import DeleteProjectModal from '../modals/DeleteProjectModal';

function Project(props) {

    const [deleteModal, setDeleteModal] = useState(false);

    const toggle = () => setDeleteModal(!deleteModal);

    return(
        <div className="Project">
        <MDBCard style={{ height: "250px" }}>
            <MDBCardImage
                className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-3 rounded'
                tag='div'
            >
                <h6 className="f-500">{props.projectData.name}</h6>
            </MDBCardImage>
            <MDBCardBody className="card-body-medium">
            <p>{props.projectData.description}</p>
            </MDBCardBody>
            <div className='rounded-bottom text-center pt-3 ml-0 mr-0'>
                <ul className='list-unstyled list-inline font-small'>
                <li className='list-inline-item pr-2 white-text'>
                    <MDBIcon far icon='clock' /> {moment(props.projectData.created_at).format("M/DD/YYYY")}
                </li>
                <li className='list-inline-item pr-2'>
                    <MDBBtn size="sm" color="blue darken-3" className="w-100">
                        <MDBIcon icon="edit" />
                    </MDBBtn>
                </li>
                <li className='list-inline-item pr-2'>
                    <MDBBtn size="sm" color="elegant" className="w-100" onClick={() => toggle()}>
                        <MDBIcon icon="trash" />
                    </MDBBtn>
                </li>
                </ul>
            </div>
        </MDBCard>

        <DeleteProjectModal
        modal={deleteModal}
        toggle={toggle}
        projectData={props.projectData}
        getProjects={props.getProjects}
        />
        </div>
    );
};

export default Project;