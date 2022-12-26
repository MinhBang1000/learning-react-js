const ADD_TASK = "add_task"
const SET_TASK = "set_task"
const DELETE_TASK = "delete_task"
const UPDATE_TASK = "update_task"


const addTask = () => {
    return {
        type: ADD_TASK
    }
}

const setTask = (payload) => {
    return {
        type: SET_TASK,
        payload
    }
}

const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload
    }
}

const updateTask = (payload) => {
    return {
        type: UPDATE_TASK,
        payload
    }
}

export {addTask,setTask,deleteTask,updateTask, ADD_TASK,SET_TASK,DELETE_TASK,UPDATE_TASK}