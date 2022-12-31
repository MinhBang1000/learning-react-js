const ADD_TASK = "AddTask"
const addTask = () => {
    return {
        type: ADD_TASK
    }
}
const SET_TASK = "SetTask"
const setTask = (payload) => {
    return {
        type: SET_TASK,
        payload
    }
}
const DELETE_TASK = "DeleteTask"
const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload
    }
}

export { ADD_TASK,DELETE_TASK,SET_TASK, addTask, deleteTask, setTask }