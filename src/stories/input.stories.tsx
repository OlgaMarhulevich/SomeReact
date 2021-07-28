import React, {useRef, useState} from 'react';

export default {
    title: 'Input'
}

export const UncontrolledInput = () => <input/>;

export const ControlledInputWithFixedValue = () => <input value={'default value'}/>;

export const TrackedValueOfUncontrolledInput = () => {
    let [value, setValue] = useState('default');
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <> <input value={value} onChange={onChangeHandler} onClick={() => setValue('')}/> { value } </>
};

export const GetValueOfUncontrolledInputByButtonClick = () => {
    let [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickButtonHandler = () => {
        const actualValue = inputRef.current?.value as React.SetStateAction<string>
        setValue(actualValue)
    }
    return <> <input ref={inputRef}/> <button onClick={() => onClickButtonHandler()}> save </button> actual value: { value } </>
};

export const ControlledCheckbox = () => {
    let [checked, setChecked] = useState(false)
    return <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
};

export const ControlledSelect = () => {
    let [selected, setSelected] = useState('')
    return <select value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Moscow</option>
    </select>
};



