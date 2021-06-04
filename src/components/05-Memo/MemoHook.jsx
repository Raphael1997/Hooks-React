import { useCounter } from '../../hooks/useCounter'
import { useState } from 'react';
import { useMemo } from 'react';

export const MemoHook = () => {
    const { state, increment } = useCounter(500);
    const [show, setShow] = useState(true);


    const proceso = (iteraciones) => {

        for (let i = 0; i < iteraciones; i++) {
            console.log("Dentro del bucle");
        }

        return `${iteraciones} iteraciones realizadas`
    }
    const memoProceso = useMemo(() => proceso(state), [state]);
    return (
        <>
            <h1>MemoHook: {state}</h1>
            <hr />

            <p>{memoProceso}</p>
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
