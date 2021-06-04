import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        () => {
            setCounter((prevCounter) => prevCounter + 1)
        },
        [setCounter],
    )
    return (
        <>
            <h1>CallBack hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}
