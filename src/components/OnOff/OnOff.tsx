import React from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export function OnOffBeforeMemo(props: OnOffPropsType) {

    const onStyle = {
        cursor: "pointer",
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        cursor: "pointer",
        border: "1px solid black",
        width: "30px",
        height: "30px",
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        border: "1px solid black",
        width: "15px",
        height: "15px",
        marginLeft: "5px",
        backgroundColor: props.on ? 'green' : 'red',
        borderRadius: "50%"
    }

    const onClicked = () => {
        props.setOn(true);
    }

    const offClicked = () => {
        props.setOn(false)
    }

    return (
        <div className={s.div}>
            <div style={onStyle} onClick={ onClicked }>On</div>
            <div style={offStyle} onClick={ offClicked }>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}
export const OnOff = React.memo(OnOffBeforeMemo)