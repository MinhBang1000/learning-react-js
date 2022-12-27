import { ADD,DELETE,SET } from "./constraints"


const initState = {
    task: '',
    tasks: []
}

const reducer = (state, action) => {
    let id = 0
    let newState
    switch (action.type) {
        case SET: {
            newState = {
                ...state,
                task: action.payload
            }
            break
        }
        case ADD: {
            id += 1
            const obj = {
                id,
                task: state.task
            }
            newState = {
                ...state,
                tasks: [...state.tasks, obj]
            }
            break
        }
        case DELETE: {
            newState = {
                ...state,
                tasks: state.tasks.filter((task) => (task.id !== action.payload))
            }
            break
        }
        default: {
            throw new Error("Invalid action !")
        }
    }

    return newState

}
export { initState }
export default reducer 