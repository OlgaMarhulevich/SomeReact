import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer/reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordionBeforeMemo(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion rendered');

    /*let [collapsed, setCollapsed] = useState(true);*/

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <>
        {/*<UncontrolledAccordionTitle titleValue={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/>*/}
        <UncontrolledAccordionTitle titleValue={props.titleValue} onClick={ () => dispatch({ type: TOGGLE_COLLAPSED })} />
        {!state.collapsed && <UncontrolledAccordionBody/>}
    </>
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionBeforeMemo)

type UncontrolledAccordionTitlePropsType = {
    onClick: () => void
    titleValue: string
}

function UncontrolledAccordionTitleBeforeMemo(props: UncontrolledAccordionTitlePropsType) {
    console.log('UncontrolledAccordionTitle rendered')
    return (
        <h3 style={{cursor: 'pointer'}} onClick={props.onClick}>{props.titleValue}</h3>
    )
}
export const UncontrolledAccordionTitle = React.memo(UncontrolledAccordionTitleBeforeMemo)

function UncontrolledAccordionBodyBeforeMemo() {
    console.log('UncontrolledAccordionBody rendered')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export const UncontrolledAccordionBody = React.memo(UncontrolledAccordionBodyBeforeMemo)

export default UncontrolledAccordion;