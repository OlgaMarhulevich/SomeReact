import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion rendered');

    let [collapsed, setCollapsed] = useState(true);

    return <>
        <UncontrolledAccordionTitle titleValue={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/>
        {!collapsed && <UncontrolledAccordionBody/>}
    </>
}

type UncontrolledAccordionTitlePropsType = {
    onClick: () => void
    titleValue: string
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log('UncontrolledAccordionTitle rendered')
    return (
        <h3 style={{cursor: 'pointer'}} onClick={props.onClick}>{props.titleValue}</h3>
    )
}

function UncontrolledAccordionBody() {
    console.log('UncontrolledAccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;