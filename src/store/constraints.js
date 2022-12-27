const SET = "set"
const setTask = (payload) => {
    return {
        type: SET,
        payload
    }
}

const ADD = "add"
const addTask = () => {
    return {
        type: ADD
    }
}

const DELETE = "delete"
const deleteTask = (payload) => {
    return {
        type: DELETE,
        payload
    }
}

export { SET,ADD,DELETE,addTask,deleteTask,setTask }