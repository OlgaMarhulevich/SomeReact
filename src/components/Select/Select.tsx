import React, {useState} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    console.log('Select rendering')

    let [collapsedSelect, setCollapsedSelect] = useState(true)
    let [hoveredItemValue, setHoveredItem] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)

    const onClickItem = (value: string) => {
        props.onChange(value)
        setCollapsedSelect(!collapsedSelect)
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsedSelect(true)
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue || hoveredItemValue === 'none') {
                    if ((hoveredItemValue === 'none')
                        || (e.key === 'ArrowDown' && i === props.items.length - 1)
                        || (e.key === 'ArrowUp' && i === 0)) {
                        e.key === 'ArrowDown' ? setHoveredItem(props.items[0].value) : setHoveredItem(props.items[props.items.length - 1].value)
                        e.key === 'ArrowDown' ? props.onChange(props.items[0].value) : props.onChange(props.items[props.items.length - 1].value)
                        break
                    } else {
                        e.key === 'ArrowDown' ? setHoveredItem(props.items[i + 1].value) : setHoveredItem(props.items[i - 1].value)
                        e.key === 'ArrowDown' ? props.onChange(props.items[i + 1].value) : props.onChange(props.items[i - 1].value)
                        break
                    }
                }
            }
        }
    }


return <div>
    <div className={s.input}
         onClick={() => setCollapsedSelect(!collapsedSelect)}
         onKeyDown={onKeyPress} tabIndex={0}>

        {selectedItem?.title || props.value}

        <img className={s.img} src={'https://image.flaticon.com/icons/png/512/36/36751.png'}/>
    </div>

    <div className={s.selectionBox}>
        {!collapsedSelect && props.items.map(i =>
            <div key={i.value}
                 onMouseEnter={() => setHoveredItem(i.value)}
                 onClick={() => onClickItem(i.value)}
                 className={s.selectItem + ' ' + (hoveredItemValue === i.value ? s.hoveredItem : '')}>
                {i.title}
            </div>)}
    </div>

</div>
}