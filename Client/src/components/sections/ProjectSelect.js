import React, { useState, useEffect, useRef } from 'react';
import '../css/ProjectSelect.css';

import { useDispatch } from 'react-redux';
import { setCurrentProject } from '../../redux/actions';
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdbreact';

import projectServices from '../../services/projectServices';

function ProjectSelect() {

    const _isMounted = useRef(true);
    const currentProjectDispatch = useDispatch();
    const [projects, setProjects] = useState([]);
    const [chosenProject, setChosenProject] = useState(null);

    useEffect(() => {
        getProjects();
        return () => _isMounted.current = false;
    }, []);

    useEffect(() => {
        currentProjectDispatch(setCurrentProject(chosenProject));
    }, [chosenProject]);

    const getProjects = () => {
        projectServices.getByUserId(1)
        .then(results => _isMounted.current ? setProjects(results.data.data) : '')
        .catch(err => console.error(err));
    };

    const handleChange = (project) => {
        setChosenProject(project);
    };

    const renderSelect = () => {
        let Projects = projects.map((el, idx) => {
            return(
                <MDBDropdownItem key={idx} onClick={() => handleChange(el)}>
                    <span className="dropdown-span">{el.name}</span>
                </MDBDropdownItem>
            );
        });
        
        return(
            <MDBDropdown onChange={handleChange}>
            <MDBDropdownToggle caret color="elegant" size="sm">
                {chosenProject ? handleProjectName() : 'Select Project' }
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                {Projects}
            </MDBDropdownMenu>
            </MDBDropdown>
        );
    };

    const handleProjectName = () => {
        let project = chosenProject;
        let projectName = project.name;
        if(project.name.split("").length > 15) {
            projectName = "";
            for(let i = 0; i < project.name.split("").length; i++) {
                if(i < 15) projectName += project.name.split("")[i];
            }
            projectName += "..."
        }
        return projectName;
    };

    return(
        <div className="ProjectSelect">
            {projects.length > 0 ? renderSelect() : ''}
        </div>
    );
};

export default ProjectSelect;