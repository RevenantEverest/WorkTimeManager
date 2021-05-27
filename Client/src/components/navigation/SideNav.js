import React, { useEffect, useState } from 'react';
import '../css/SideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Link } from 'react-router-dom';
import { 
    MDBIcon, 
    MDBSideNavNav, 
    MDBSideNav, 
    MDBSideNavLink,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem
} from 'mdbreact';

/* Page Imports */
import Dashboard from '../pages/Dashboard';

function SideNav() {

    const [toggleStateA, setToggleStateA] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const breakWidth = 1300;

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return window.removeEventListener("resize", handleResize);
    });
    
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleToggleClickA = () => setToggleStateA(!toggleStateA);

    const navStyle = {
        paddingLeft: windowWidth > breakWidth ? "210px" : "16px"
    };

    const mainStyle = {
        margin: "0 0 0 240px",
        paddingTop: "5.5rem",
        paddingLeft: windowWidth > breakWidth ? "240px" : "0"
    };

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
            </MDBNavbarNav>
        </MDBNavbar>
        <main style={mainStyle}>
            <Route exact path="/" component={() => (<Dashboard />)} />
        </main>
        {/* <Footer /> */}
        </div>
    );
};

export default SideNav;