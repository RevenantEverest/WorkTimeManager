import {
    MDBContainer as Container, 
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';

function Timesheet() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Timesheet", path: "/timesheet", isActive: true }
    ];

    return(
        <div id="Timesheet">
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

export default Timesheet;