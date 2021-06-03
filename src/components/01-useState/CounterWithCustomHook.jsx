import { useCounter } from "../../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>Counter with Custom Hook: {state}</h1>
            <hr />
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-secondary" onClick={reset}>reset</button>
            <button className="btn btn-info" onClick={decrement}>-1</button>
        </>
    )
}
