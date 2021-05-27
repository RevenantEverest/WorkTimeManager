import {
    MDBContainer as Container,
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdbreact';

function HomePage() {
    return(
        <div id="HomePage">
            <Container>
            <Row className="justify-content-center">
                <Col style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                    <MDBBtn>Click</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default HomePage;