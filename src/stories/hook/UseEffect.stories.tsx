import React, {useEffect, useState} from "react";

export default {
    title: 'hook/useEffect'
}

export const Example = () => {
    console.log('UseEffectComponent')

    const [counter, setCounter] = useState(0)
    const [something, setSomething] = useState(0)

    useEffect(() => {
        console.log('useEffect every render')
    })
    useEffect(() => {
        console.log('useEffect only first render')
    }, [])
    useEffect(() => {
        console.log('useEffect depends on counter')
    }, [counter])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            {counter}
            <button onClick={() => setSomething(something + 1)}>something else +</button>
            {something}
        </>
    )
}

export const WithSetInterval = () => {
    console.log('UseEffectWithSetInterval')

    const [counter, setCounter] = useState(0)
    const [something, setSomething] = useState(0)

/*    useEffect(() => {
        console.log('useEffect every render')
        setInterval(() => {
            console.log('setInterval, counter: ' + counter)
            setCounter(counter + 1)
        }, 1000)
    }, [])*/

    useEffect(() => {
        console.log('useEffect every render')
        setInterval(() => {
            console.log('setInterval, counter: ' + counter)
            setCounter((counter) => counter + 1)
        }, 1000)
    }, [])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            {counter}
            <button onClick={() => setSomething(something + 1)}>something else +</button>
            {something}
        </>
    )
}
