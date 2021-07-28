import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendered');

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star id={i + 1} onClick={props.onClick} selected={props.value > i}/>)
    }

    return (
        <div> {stars} </div>
    )
}

type StarPropsType = {
    id: any
    selected: boolean
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    console.log('star rendered');

    return <span style={{cursor: 'pointer'}} onClick={() => props.onClick(props.id)}>
              {props.selected ? <b>star </b> : 'star '}
           </span>
}