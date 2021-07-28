import React, { useState } from 'react'
import s from './OnOff.module.css'

type UncontrolledOnOffPropsType = {
    onOrOff: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    let [on, setOn] = useState(false);

    const onStyle = {
        cursor: "pointer",
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        cursor: "pointer",
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        border: "1px solid black",
        width: "15px",
        height: "15px",
        marginLeft: "5px",
        backgroundColor: on ? 'green' : 'red',
        borderRadius: "50%"
    }

    const onClicked = () => {
        setOn(true);
        props.onOrOff(true);
    }

    const offClicked = () => {
        setOn(false);
        props.onOrOff(false);
    }

    return <div className={s.div}>
        <div style={onStyle} onClick={ onClicked }>On</div>
        <div style={offStyle} onClick={ offClicked }>Off</div>
        <div style={indicatorStyle}/>
    </div>
}