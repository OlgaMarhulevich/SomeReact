import React, {useEffect, useState} from "react";
import { AnalogClock } from "./AnalogClock";

// const helper = (time: number) => time < 10 ? '0' + time : time

export const Clock = () => {
    let [time, setTime] = useState(new Date())
    let [mode, setMode] = useState<string>('digital')

    useEffect(() => {
        const setIntervalID = setInterval(() => {
            setTime(() => new Date())
            console.log('tick')
        }, 1000)
        return () => {
            clearInterval(setIntervalID)
        }
    }, [])

    const onClickDigital = () => setMode('digital')
    const onClickAnalog = () => setMode('analog')

    return (
        <>{/*{helper(time.getHours()) + ':' + helper(time.getMinutes()) + ':' + helper(time.getSeconds())}*/}

            <button onClick={() => onClickDigital()}>digital</button>
            <button onClick={() => onClickAnalog()}>analog</button>
            <br/>
            <br/>

            {mode === 'digital' ? time.toLocaleTimeString() : <AnalogClock time={time}/>}
        </>
    )
}