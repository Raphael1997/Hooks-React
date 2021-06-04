import React from 'react'
import { memo } from 'react'

export const Counter = memo(({ value }) => {
    console.log("llamando otra vez");
    return (
        <>
            <small>{value}</small>
        </>
    )
})
