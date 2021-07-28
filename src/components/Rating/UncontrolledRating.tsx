import React, {useState} from "react";
import {RatingValueType} from "./Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('UncontrolledRating rendered');

    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star id={i + 1} setValue={setValue} selected={value > i}/>)
    }

    return (
        <div> {stars} </div>
    )
}

type StarPropsType = {
    id: number
    selected: boolean
    setValue: (id: number) => void
}

function Star(props: StarPropsType) {
    console.log('star rendered');

    return <span style={{cursor: 'pointer'}} onClick={() => props.setValue(props.id)}>
              {props.selected ? <b>star </b> : 'star '}
           </span>
}