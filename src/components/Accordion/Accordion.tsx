import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    /**
     * Elements are showing when the title is not collapsed
     */
    collapsed: boolean
    onClickCallback: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered');

    return <>
        <AccordionTitle titleValue={props.titleValue} collapsed={props.collapsed} onClickCallback={ props.onClickCallback }/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </>
}

type AccordionTitlePropsType = {
    onClickCallback: () => void
    titleValue: string
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 style={{cursor: 'pointer'}}
                onClick={ props.onClickCallback }>
            {props.titleValue}
        </h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendered')
    return <ul>
        {props.items.map((item, index) => <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li>)}
    </ul>
}

export default Accordion;