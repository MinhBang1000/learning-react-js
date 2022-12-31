import {ADD_TASK, DELETE_TASK, SET_TASK} from "./constraints"

const initState = {
    task: '',
    tasks: []
}

let id = 0

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case ADD_TASK:
            id += 1
            const newInstance = {
                id,
                name: state.task
            }
            newState = {
                ...state,
                tasks: [...state.tasks, newInstance]
            }
            break
        case DELETE_TASK:
            newState = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
            break
        case SET_TASK:
            newState = {
                ...state,
                task: action.payload
            }
            break
        default:
            throw new Error("Invalid action !")
    }
    return newState
}

export {initState}
export default reducer 