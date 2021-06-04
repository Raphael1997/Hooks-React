import React from 'react'
import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();
    const handlClick = () => {

        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Su nombre"
                ref={inputRef}
            />

            <button className="btn btn-outline-dark mt-5"
                onClick={handlClick}
            >Focus</button>
        </>
    )
}
