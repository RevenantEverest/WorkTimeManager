import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { usePageVisibility } from '../../utils/visibility';
import { MDBBtn } from 'mdbreact';

function StopWatch(props) {

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [blurStartDate, setBlurStartDate] = useState(null);

    const isVisible = usePageVisibility();

    let interval = null;

    const handleTimerInterval = () => {
        if(isRunning && !blurStartDate)
            interval = setInterval(() => setTime(time => time + 10), 10);
        else 
            clearInterval(interval);
    };

    useEffect(() => {
        
        handleTimerInterval();

        return () => clearInterval(interval);
    }, [isRunning, handleTimerInterval, interval, blurStartDate]);

    useEffect(() => {
        if(!isVisible && isRunning) {
            setBlurStartDate(moment(new Date()));
            clearInterval(interval);
        }
        else if(isVisible && blurStartDate) {
            let blurEndDate = moment(new Date());
            let timeDiff = blurEndDate.diff(blurStartDate, 'seconds') * 1000;
            setTime(time + timeDiff);
            handleTimerInterval();
            setBlurStartDate(null);
        }
    }, [isRunning, isVisible, handleTimerInterval, interval, setBlurStartDate, blurStartDate, time,]);

    

    const handleStart = () => {
        let date = new Date();
        setStartDate(date);
        setIsRunning(true);
    };

    const handleReset = () => {
        let date = new Date();
        setIsRunning(false);
        setTime(0);
        props.getStartStopValues(startDate, date);
    };

    const renderStart = () => {
        return <MDBBtn color="green" size="md" className="w-25" onClick={() => handleStart()}>Start</MDBBtn>;
    };

    return(
        <div className="StopWatch w-100">
        <MDBBtn color="elegant" size="md" className="w-45 f-800" style={{ fontSize: "14px" }}>
            {("0" + Math.floor(time / 60000) % 60).slice(-2)}:
            {("0" + Math.floor(time / 1000) % 60).slice(-2)}.
            {("0" + Math.floor(time / 10) % 100).slice(-2)}
        </MDBBtn>
        {!isRunning ? renderStart() : ""}
        {isRunning ? <MDBBtn color="danger" size="md" className="w-25" onClick={() => handleReset()}>Stop</MDBBtn> : ""}
        </div>
    );
};

export default StopWatch;