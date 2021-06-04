import React from 'react'
import { Counter } from "./Counter"
import { useCounter } from '../../hooks/useCounter'
import { useState } from 'react';

export const Memorize = () => {
    const { state, increment } = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Counter: <Counter value={state} /></h1>
            <hr />

            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button
                className="btn btn-outline-dark"
                onClick={() => {
                    setShow(!show);
                }}
            >Show/hide</button>
        </>
    )
}
