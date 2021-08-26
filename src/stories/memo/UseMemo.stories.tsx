import React, {useMemo, useState} from "react";
import {Select} from "../../components/Select/Select";

export default {
    title: 'Memo/useMemo'
}

// DifficultCounting

export const DifficultCounting = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let factorialA
    let factorialB = 1

    factorialA = useMemo(() => {
        console.log('factorialA counting')
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 10000) {
                fake++
                const fakeValue = Math.random()
                console.log(fakeValue)
            }
            tempResA *= i
        }
        return tempResA
    }, [a])


    for (let i = 1; i <= b; i++) {
        factorialB *= i
    }

    return (
        <>
            <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={e => setB(+e.currentTarget.value)}/>

            <div>
                Result for A: {factorialA}
            </div>
            <div>
                Result for B: {factorialB}
            </div>
        </>
    )
}

// Users adding

const UsersBeforeReactMemo = (props: { users: Array<string> }) => {
    console.log('users rendering')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersBeforeReactMemo)

export const HelpForUsersReactMemo = () => {
    console.log( 'HelpForUsersReactMemo' )

    const [counter, setCounter] = useState(3)
    const [users, setUsers] = useState(['olya', 'tanya', 'artem', 'katya'])

    const newUsers = useMemo(() => {return users.filter(u => u.indexOf('e') > -1)}, [users])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={() => setUsers([...users, 'sveta'])}>+ user</button>
            <Users users={newUsers}/>
        </>
    )
}

// Select

const SelectMemo = React.memo(Select)

export const HelpForSelectReactMemo = () => {
    console.log('HelpForSelectReactMemo')

    const [selected1, setSelected1] = useState('none')
    const [selected2, setSelected2] = useState('none')
    const [selected3, setSelected3] = useState('none')

    const [counter, setCounter] = useState(0)

    const [arr, setArr] = useState([
        {countryID: 1, city: 'Minsk', people: 10000},
        {countryID: 1, city: 'Vitebsk', people: 21000},
        {countryID: 1, city: 'Gomel', people: 30000},
        {countryID: 2, city: 'Moscow', people: 25000},
        {countryID: 2, city: 'SPB', people: 15000},
    ])

    const arrForSelect1 = useMemo(() => {
        return arr.filter(i => i.countryID === 1).map((i, index) => {
            return {title: i.city, value: index}
        })
    }, [arr])
    const arrForSelect2 = useMemo(() => {
        return arr.filter(i => i.people > 20000).map((i, index) => {
            return {title: i.city, value: index}
        })
    }, [arr])
    const arrForSelect3 = useMemo(() => {
        return arr.filter(i => i.city.indexOf('M') === 0).map((i, index) => {
            return {title: i.city, value: index}
        })
    }, [arr])

    return ( <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        { counter }
        <button onClick={() => setArr([...arr, {countryID: 1, city: 'Mogilev', people: 13000}])}>+ city</button>
        <SelectMemo value={selected1} onChange={setSelected1} items={arrForSelect1}/>
        <SelectMemo value={selected2} onChange={setSelected2} items={arrForSelect2}/>
        <SelectMemo value={selected3} onChange={setSelected3} items={arrForSelect3}/>
    </>)
}
