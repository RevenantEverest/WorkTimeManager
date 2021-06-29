import React, { useEffect, useState } from 'react';
import '../css/SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'react-router-dom';
import {
    MDBIcon, 
    MDBSideNavNav, 
    MDBSideNav, 
    MDBSideNavLink,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
} from 'mdbreact';

/* Page Imports */
import Dashboard from '../pages/Dashboard';
import Timesheet from '../pages/Timesheet';
import Projects from '../pages/ProjectsList';
import SingleProject from '../pages/SingleProject';
import SingleBillingPeriod from '../pages/SingleBillingPeriod';
import History from '../pages/History';
import CreateProject from '../pages/CreateProject';
import ProjectSelect from '../sections/ProjectSelect';

import Footer from '../navigation/Footer';

function SideNav() {

    const [toggleStateA, setToggleStateA] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const breakWidth = 1300;

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
    const handleToggleClickA = () => setToggleStateA(!toggleStateA);

    const renderServerPicker = () => {
        return(
            <MDBNavItem>
                <ProjectSelect />
            </MDBNavItem>
        );
    };

    const navStyle = { paddingLeft: windowWidth > breakWidth ? "210px" : "16px" };
    const mainStyle = { paddingLeft: windowWidth > breakWidth ? "240px" : "0" };

    return(
        <div className="fixed-sn black-skin">
        <MDBSideNav
        className="SideNav"
        logo="https://i.imgur.com/fgMvl0G.png"
        triggerOpening={toggleStateA}
        breakWidth={breakWidth}
        bg="https://i.imgur.com/QF4RJul.jpg"
        mask="strong"
        href="/"
        fixed
        >
            <MDBSideNavNav>
            <MDBSideNavLink to="/" topLevel className="SideNav-El">
                <FontAwesomeIcon className="FontAwesomeIcon" icon={"tachometer-alt"} />
                Dashboard
            </MDBSideNavLink>
            <MDBSideNavLink to="/timesheet" topLevel className="SideNav-El">
                <FontAwesomeIcon className="FontAwesomeIcon" icon="hourglass-start" />
                Timesheet
            </MDBSideNavLink>
            <MDBSideNavLink to="/projects" topLevel className="SideNav-El">
                <FontAwesomeIcon className="FontAwesomeIcon" icon="tasks" />
                Projects
            </MDBSideNavLink>
            <MDBSideNavLink to="/history" topLevel className="SideNav-El">
                <FontAwesomeIcon className="FontAwesomeIcon" icon="history" />
                History
            </MDBSideNavLink>
            </MDBSideNavNav>
        </MDBSideNav>
        <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
            <MDBNavbarNav left>
            <MDBNavItem>
                <div
                onClick={() => handleToggleClickA()}
                key="sideNavToggleA"
                style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                }}
                >
                <MDBIcon icon="bars" color="white" size="2x" />
                </div>
            </MDBNavItem>
            {windowWidth > 800 ? renderServerPicker() : ''}
            </MDBNavbarNav>
            <MDBNavbarNav right>
            {windowWidth > 800 ? '' : renderServerPicker()}
            </MDBNavbarNav>
        </MDBNavbar>
        <main style={mainStyle}>
            <Route exact path="/" component={() => (<Dashboard />)} />
            <Route exact path="/timesheet" component={() => (<Timesheet />)} />
            <Route exact path="/projects" component={() => (<Projects />)} />
            <Route exact path="/projects/:project" component={SingleProject} />
            <Route exact path="/projects/:project/billing_periods/:billing_period" component={SingleBillingPeriod} />
            <Route exact path="/history" component={() => (<History />)} />

            <Route exact path="/projects/create" component={() => (<CreateProject />)} />
        </main>
        <Footer />
        </div>
    );
};

export default SideNav;