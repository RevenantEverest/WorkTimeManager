import moment from 'moment';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

function TimesheetTable(props) {
    const renderRows = () => {
        let Rows = props.rows.map((el, idx) => {
            let ts = moment(el.time_start.toString(), "YYYY-M-DD HH:mm:ss");
            let te = moment(el.time_end.toString(), "YYYY-M-DD HH:mm:ss");
            return(
                <tr key={idx}>
                <td className="f-400">{idx + 1}</td>
                <td className="f-400">{el.title}</td>
                <td className="f-400">{ts.format("M/DD/YYYY HH:mm:ss")}</td>
                <td className="f-400">{te.format("M/DD/YYYY HH:mm:ss")}</td>
                <td className="f-400">{((te.diff(ts, 'seconds') / 60) / 60).toFixed(2)}</td>
                <td className="f-400">
                    <MDBBtn color="blue darken-3" size="sm">
                        <MDBIcon icon="edit" />
                    </MDBBtn>
                    <MDBBtn color="elegant" size="sm">
                        <MDBIcon icon="trash" />
                    </MDBBtn>
                </td>
                </tr>
            );
        });

        return Rows;
    };

    return(
        <MDBTable>
        <MDBTableHead>
            <tr>
            <th className="f-600">#</th>
            <th className="f-600">Title</th>
            <th className="f-600">Time Start</th>
            <th className="f-600">Time End</th>
            <th className="f-600">Total Time (hrs.)</th>
            <th className="f-600">Actions</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {renderRows()}
        </MDBTableBody>
        </MDBTable>
    );
};

export default TimesheetTable;