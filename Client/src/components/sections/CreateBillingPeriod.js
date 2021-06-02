import moment from 'moment';
import { useSelector } from 'react-redux';
import { 
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn
} from 'mdbreact';
import billingPeriodServives from '../../services/billingPeriodServices';

function CreateBillingPeriod(props) {
    
    const currentProject = useSelector(state => state.currentProject);

    const handleCreateBillingPeriod = () => {
        let data = {
            project_id: currentProject.id,
            start_date: moment().utc()
        };

        billingPeriodServives.save(data)
        .then(() => props.getLatestBillingPeriod())
        .catch(err => console.error(err));
    };

    return(
        <Row className={`${props.className}`}>
        <Col className="d-flex justify-content-center">
            <MDBBtn color="green" onClick={() => handleCreateBillingPeriod()}>
                Create New Billing Period
            </MDBBtn>
        </Col>
        </Row>
    );
};

export default CreateBillingPeriod;