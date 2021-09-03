import React from 'react'
import './AnalogClock.css'

export const AnalogClock = (props: { time: Date }) => {
    const seconds = props.time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const secondHand = {transform: `rotate(${secondsDegrees}deg)`};

    const mins = props.time.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const minsHand = {transform: `rotate(${minsDegrees}deg)`};

    const hour = props.time.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    const hourHand = {transform: `rotate(${hourDegrees}deg)`};


    return <div className="clock">
        <div className="outer-clock-face">
            <div className="marking marking-one"/>
            <div className="marking marking-two"/>
            <div className="marking marking-three"/>
            <div className="marking marking-four"/>
            <div className="inner-clock-face">
                <div className="hand" style={hourHand}/>
                <div className="hand" style={minsHand}/>
                <div className="hand" style={secondHand}/>
            </div>
        </div>
    </div>
}