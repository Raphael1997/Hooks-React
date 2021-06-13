

const initialState = [{
    id: 1,
    task: "Estudiar Angular",
    done: true
}]

const todoReduce = (state = initialState, action) => {

    if (action?.type === "agregar") {

        return [...state, action.payload];
    }

    return state
}

let todos = todoReduce();

const newTodo = {
    id: 2,
    task: "Estudiar React",
    done: false
}

const agregarTodoAction = {
    type: "agregar",
    payload: newTodo
}

todos = todoReduce(todos, agregarTodoAction);

console.log(todos);