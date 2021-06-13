import React from 'react'
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import "./style.css"
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';


const init = () => {
    return JSON.parse(localStorage.getItem("task")) || []; /* [
        {
            id: new Date().getTime(),
            desc: "Aprender React",
            done: false
        }
    ]; */
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ desc }, handleOnChange, reset] = useForm({
        desc: ""
    });

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (desc.trim().length <= 0) return;
        const newTodo = {
            id: new Date().getTime(),
            desc,
            done: false
        }

        const addActionTodo = {
            type: "add",
            payload: newTodo
        }

        dispatch(addActionTodo);
        // limpiar el formulario
        reset();
    }

    const handleToogle = (todoId) => {

        dispatch({
            type: "toogle",
            payload: todoId
        });
    }

    const handleDeleteTask = (id) => {

        return () => {
            const deleteTodo = {
                id
            }

            const deleteActionTodo = {
                type: "delete",
                payload: deleteTodo
            }

            dispatch(deleteActionTodo);
        }
    }

    return (
        <>
            <h1>TodoApp <small>({todos.length})</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => {
                                return <li key={todo.id} className="list-group-item">
                                    <p className={`${todo.done && 'complete'}`} onClick={() => handleToogle(todo.id)}>{i + 1} {todo.desc}</p>
                                    <button className="btn btn-danger" onClick={handleDeleteTask(todo.id)}>Borrar</button>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add todo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="desc"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={desc}
                            onChange={handleOnChange}
                        />

                        <button className="btn btn-outline-primary mt-1 btn-block">add</button>
                    </form>
                </div>
            </div>
        </>
    )
}
