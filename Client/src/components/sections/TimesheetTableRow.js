import React, { useState } from 'react';
import moment from 'moment';
import {
    MDBBtn,
    MDBIcon
} from 'mdbreact';

import DeleteBillingPeriodRecordModal from '../modals/DeleteBillingPeriodRecordModal';

function TimesheetTableRow(props) {

    const bpr = props.billingPeriodRecordData;
    const [deleteModal, setDeleteModal] = useState(false);

    const toggle = () => setDeleteModal(!deleteModal);

    let ts = moment(bpr.time_start.toString(), "YYYY-M-DD HH:mm:ss");
    let te = moment(bpr.time_end.toString(), "YYYY-M-DD HH:mm:ss");

    return(
        <tr>
        <td className="f-400">{props.idx + 1}</td>
        <td className="f-400">{bpr.title}</td>
        <td className="f-400">{ts.format("M/DD/YYYY HH:mm:ss")}</td>
        <td className="f-400">{te.format("M/DD/YYYY HH:mm:ss")}</td>
        <td className="f-400">{((te.diff(ts, 'seconds') / 60) / 60).toFixed(2)}</td>
        <td className="f-400">
            <MDBBtn color="blue darken-3" size="sm">
                <MDBIcon icon="edit" />
            </MDBBtn>
            <MDBBtn color="elegant" size="sm" onClick={() => toggle()}>
                <MDBIcon icon="trash" />
            </MDBBtn>

            <DeleteBillingPeriodRecordModal
            modal={deleteModal}
            toggle={toggle}
            billingPeriodRecordData={bpr} 
            getBillingPeriodRecords={props.getBillingPeriodRecords}
            />
        </td>
        </tr>
    );
};

export default TimesheetTableRow;