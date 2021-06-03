import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y };
            setCoords(coors);
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])
    return (
        <>
            <h1>Componente Message</h1>
            <p>Mouse en X: {coords.x}</p>
            <p>Mouse en Y: {coords.y}</p>
        </>
    )
}
