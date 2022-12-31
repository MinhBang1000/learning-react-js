import styles from "./TaskItem.module.css"
import clsx from "clsx"
import { deleteTask } from "../../store"

const TaskItem = ({task, onDelete}) => {
    return (<li className={clsx(styles.item)}><span>{task.name}</span><span onClick={() => onDelete(deleteTask(task.id))}>&#10006;</span></li>)
}

export default TaskItem