import React from 'react'

export const ShowIncrement = ({ increment }) => {

    console.log("show increment");
    return (

        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            +1

        </button>
    )
}
