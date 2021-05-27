import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col
} from 'mdbreact';

import Breadcrumb from '../sections/Breadcrumb';

function History() {

    const _Routes = [
        { name: "Home", path: "/" },
        { name: "History", path: "/history", isActive: true }
    ];

    return(
        <div id="History">
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

export default History;