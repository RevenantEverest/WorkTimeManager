import moment from 'moment';
import {
    MDBRow as Row,
    MDBCol as Col,
    MDBCard,
    MDBCardBody
} from 'mdbreact';

function TimesheetTotalTime(props) {

    const records = props.records;
    
    let recordTimeDif = records.map(el => {
        let ts = moment(el.time_start.toString(), "YYYY-M-DD HH:mm:ss");
        let te = moment(el.time_end.toString(), "YYYY-M-DD HH:mm:ss");

        return (te.diff(ts, 'seconds') / 60) / 60;
    });

    let totalTimeInHours = 0;
    recordTimeDif.forEach(el => totalTimeInHours = totalTimeInHours + el);

    return(
        <Row>
        <Col>
            <MDBCard>
            <MDBCardBody className="card-body-light text-white">
            <div style={{ float: "left" }}>
            <p className="d-inline f-700">Total: </p>
            <p className="d-inline">{totalTimeInHours.toFixed(2)}</p>
            </div>
            <div style={{ float: "right" }}>
            <p className="d-inline f-700">Current Amount Due: </p>
            <p className="d-inline">{totalTimeInHours.toFixed(2) * 20}</p>
            </div>
            </MDBCardBody>
            </MDBCard>
        </Col>
        </Row>
    );
};

export default TimesheetTotalTime;