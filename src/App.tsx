import React, {useDebugValue, useState} from 'react';
import s from './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff'
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log('App is rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false);

    let [selected, setSelected] = useState('none')

    const items = [
        {title: 'olga', value: 1},
        {title: 'anna', value: 2},
        {title: 'john', value: 3},
        {title: 'nick', value: 4}
    ]

    return (
        <div className={s.all}>
            <PageTitle title="Main page"/>

            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff onOrOff={setOn}/>
            {on.toString()}

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion onClick={() => console.log('onClick callback in App')} items={items} titleValue="Menu"
                       collapsed={collapsed} onClickCallback={() => setCollapsed(!collapsed)}/>
            <UncontrolledAccordion titleValue={'Menu Uncontrolled'}/>

            <Select value={selected} onChange={setSelected} items={items}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;



