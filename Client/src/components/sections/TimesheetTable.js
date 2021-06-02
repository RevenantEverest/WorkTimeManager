import {
    MDBTable,
    MDBTableHead,
    MDBTableBody
} from 'mdbreact';

import TimesheetTableRow from './TimesheetTableRow';

function TimesheetTable(props) {

    const renderRows = () => {
        let Rows = props.rows.map((el, idx) => {
            return ( 
                <TimesheetTableRow 
                key={idx} 
                idx={idx} 
                billingPeriodRecordData={el} 
                getBillingPeriodRecords={props.getBillingPeriodRecords}
                />
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