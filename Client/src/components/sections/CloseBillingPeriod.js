import moment from 'moment';
import { MDBBtn } from 'mdbreact';

import billingPeriodServices from '../../services/billingPeriodServices';

function CloseBillingPeriod(props) {

    const billingPeriod = props.billingPeriod;

    const handleCloseBillingPeriod = () => {
        billingPeriod.end_date = moment().utc();

        billingPeriodServices.update(billingPeriod)
        .then(() => props.getLatestBillingPeriod())
        .catch(err => console.error(err));
    };

    return(
        <MDBBtn 
        color="danger" 
        className="mt-0 ml-4 f-600" 
        size="sm"
        onClick={() => handleCloseBillingPeriod()}>
            Close Billing Period
        </MDBBtn>
    );
};

export default CloseBillingPeriod;