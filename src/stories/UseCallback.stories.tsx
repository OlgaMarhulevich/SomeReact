import React, {useCallback, useState} from "react";

export default {
    title: 'Memo/useCallback'
}

// Books adding

export const UseCallbackBooksAdding = () => {
    console.log('UseCallbackBooksAdding')

    const [counter, setCounter] = useState(3)
    const [books, setBooks] = useState(['CSS', 'HTML', 'React'])

/*    const memoizedAddBookUseMemo = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Redux']
            setBooks(newBooks)
        }
    }, [books])*/

    const memoizedAddBookUseCallback = useCallback(() => {
            const newBooks = [...books, 'Redux']
            setBooks(newBooks)
        }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books books={books} addBook={memoizedAddBookUseCallback}/>
        </>
    )
}

const BooksBeforeReactMemo = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('books rendering')
    return (
        <div>
            <button onClick={props.addBook}>+ book</button>
            {props.books.map((b, i) => <div key={i}>{b}</div>)}
        </div>
    )
}
const Books = React.memo(BooksBeforeReactMemo)