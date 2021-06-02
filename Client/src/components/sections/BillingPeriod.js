import moment from 'moment';
import {
    MDBCard,
    MDBCardHeader,
    MDBIcon,
    MDBBtn
} from 'mdbreact';

function BillingPeriod(props) {
    const billingPeriod = props.billingPeriodData;
    return(
        <MDBCard>
            <MDBCardHeader tag="div" className="card-header-overwrite f-500 text-center">
                <div>
                <MDBIcon far className="mr-2" icon='clock' /> 
                {moment(billingPeriod.start_date).format("MMM Do YYYY")}
                <p className="d-inline"> - </p>
                {billingPeriod.end_date ? moment(billingPeriod.end_date).format("MMM Do YYYY") : "Present"}
                </div>
            </MDBCardHeader>
            <div className='rounded-bottom text-center pt-3 ml-0 mr-0'>
                <ul className='list-unstyled list-inline font-small'>
                <li className='list-inline-item pr-2 white-text'>
                    <MDBBtn color="blue darken-3" size="sm">
                    View
                    </MDBBtn>
                    <MDBBtn color="elegant" size="sm">
                        <MDBIcon icon='trash' />
                    </MDBBtn>
                </li>
                </ul>
            </div>
        </MDBCard>
    );
};

export default BillingPeriod;