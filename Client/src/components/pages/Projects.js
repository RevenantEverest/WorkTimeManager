import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';

function Projects() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects", isActive: true }
    ];

    return(
        <div id="Projects">
            <Container>
            <Row>
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Projects;