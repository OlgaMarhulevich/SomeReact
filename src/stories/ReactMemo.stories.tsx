import React, {useState} from "react";

export default {
    title: 'Memo/React Memo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const UsersBeforeReactMemo = (props: { users: Array<string> }) => {
    console.log('users rendering')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersBeforeReactMemo)

export const ReactMemoDemo = () => {
    const [counter, setCounter] = useState(3)
    const [users, setUsers] = useState(['olya', 'tanya', 'artem', 'katya'])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users, 'sveta' + new Date().getTime()])}>+ user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
