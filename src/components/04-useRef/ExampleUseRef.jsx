import React from 'react'
import { useState } from 'react'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const ExampleUseRef = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>Example useRef</h1>
            <hr />

            {show && <MultipleCustomHook />}

            <button className="btn btn-primary" onClick={() => {setShow(!show)}}>Show/Hide</button>
        </>
    )
}
