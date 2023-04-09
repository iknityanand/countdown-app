import React from 'react';
import {useCountdown} from './hooks/useCountdown'
import DateTimeDisplay from './DateTimeDisplay'; 

const ExpiredNotice = () =>{
    return (
        <div className="expired-notice">
            <span>Expired!!</span>
            <p>Please select a futrue date and time.</p>
        </div>
    )
}

const ShowTimer = ({days, hours, minutes, seconds})=>{
    return (
        <div className="show-counter">
            <a href="http://google.com"
            target='_blank'
            rel='noopener noreferer'
            className='countdown-link'>
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3}/>
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false}/>
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={false}/>
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false}/>
            </a>
        </div>
    )
}

const CountdownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days+ hours+ minutes+ seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return (<ShowTimer days={days} hours= {hours} minutes={minutes} seconds={seconds} />)
    }
}

export default CountdownTimer;
