import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';

function Dashboard() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard", isActive: true }
    ];

    return(
        <div id="Dashboard">
            <Container>
            <Row className="mt-4">
                <Col>
                <Breadcrumb routes={_Routes} />
                </Col>
            </Row>
            </Container>    
        </div>
    );
};

export default Dashboard;