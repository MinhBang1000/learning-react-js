import { ADD_TASK,DELETE_TASK,UPDATE_TASK,SET_TASK } from "./constraints"

const initState = {
    task: '',
    tasks: []
}

let id = 0

const reducer = (state, action) => {

    let newState =  state
    switch (action.type) {
        case ADD_TASK: {
            id += 1
            const instance = {
                id,
                task: state.task
            }
            newState = {
                task: '',
                tasks: [...state.tasks, instance]
            }
            break
        }
        case DELETE_TASK: {
            newState = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
            break
        }
        case UPDATE_TASK: {
            let tasks = state.tasks.filter(task => task.id !== action.payload)
            const updatedInstance = {
                id: action.payload,
                task: state.task
            }
            tasks = [...tasks, updatedInstance]
            newState = {
                ...state,
                tasks
            }
            break
        }
        case SET_TASK: {
            newState = {
                ...state,
                task: action.payload
            }
            break
        }
        default: {
            throw new Error("Invalid error !")
        }
    }
    return newState

}

export {initState}
export default reducer