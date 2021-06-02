import React, { useState, useEffect, useRef } from 'react';
import TimesheetTable from './TimesheetTable';
import TimesheetTotalTime from './TimesheetTotalTime';
import billingPeriodRecords from '../../services/billingPeriodRecordServices';

function BillingPeriodRecords(props) {

    const _isMounted = useRef(true);
    const billingPeriod = props.billingPeriod;
    const [records, setRecords] = useState(null);

    useEffect(() => {
        getBillingPeriodRecords();
        return () => _isMounted.current = false;
    }, []);

    const getBillingPeriodRecords = () => {
        billingPeriodRecords.getByBillingPeriodId(billingPeriod.id)
        .then(results => {
            if(_isMounted) setRecords(results.data.data);
        })
        .catch(err => console.error(err));
    };

    return(
        <div className="BillingPeriodRecords">
        {records ? <TimesheetTable getBillingPeriodRecords={getBillingPeriodRecords} rows={records} /> : ''}
        {records && records.length > 0 ? <TimesheetTotalTime records={records} /> : ''}
        </div>
    );
};

export default BillingPeriodRecords;