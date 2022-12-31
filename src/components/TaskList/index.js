import styles from "./TaskList.module.css"
import clsx from "clsx"
import { useStore } from "../../store"
import TaskItem from "../TaskItem"

const TaskList = () => {
    const [state, dispatch] = useStore()
    const isEmptyTasks = () => {
        return state.tasks.length === 0
    }
    return (
    <ul className={clsx(styles.list)}>{
        isEmptyTasks() ? <li className={clsx(styles.instead)}>Don't have any task to do !</li> :
        state.tasks.map(task => <TaskItem key={task.id} task={task} onDelete={dispatch} />)
    }</ul>)
}

export default TaskList