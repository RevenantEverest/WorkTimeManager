import React, { useState } from 'react';
import {
    MDBRow as Row,
    MDBCol as Col,
    MDBBtn
} from 'mdbreact';

function EditBillingPeriodForm(props) {

    const billingPeriodRecord = props.billingPeriodRecordData;
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => setTitle(e.target.value); 

    const handleSubmit = (e) => {
        e.preventDefault();
        billingPeriodRecord.title = title;
        props.updateBillingPeriodRecord(billingPeriodRecord);
        props.toggle();
    };

    return(
        <div className="EditBillingPeriodRecordForm">
            <Row className="mt-4 d-flex justify-content-center">
                <Col lg={10}>
                <div className="input-dark">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-newspaper prefix" />
                        </span>
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder={billingPeriodRecord.title ? billingPeriodRecord.title : 'Title'} 
                    aria-label="Title" 
                    name="title"
                    aria-describedby="basic-addon"
                    onChange={(e) => handleTitleChange(e)}
                    />
                    </div>
                </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="d-flex justify-content-end" lg={11}>
                    <MDBBtn color="blue darken-3" size="md" onClick={(e) => handleSubmit(e)}>Edit</MDBBtn>
                    <MDBBtn color="grey" className="ml-0" size="md" onClick={() => props.toggle()}>Close</MDBBtn>
                </Col>
            </Row>
        </div>
    );
};

export default EditBillingPeriodForm;