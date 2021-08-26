import React, {useState} from "react";

export default {
    title: 'hook/useState'
}

export const UseStateWithFunction = () => {
    console.log('UseStateCounter')

    const initialFoo = (): number => {
        console.log('initialFoo')
        return 0
    }
    const newCounter = (counter: number) => {
        console.log('newCounter')
        return counter + 1
    }
    const [counter, setCounter] = useState(initialFoo)

    return (
        <>
            <button onClick={() => setCounter(newCounter)}>+</button>
            {counter}
        </>
    )
}