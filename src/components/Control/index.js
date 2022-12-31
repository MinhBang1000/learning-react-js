import styles from "./Control.module.css"
import {addTask, setTask, useStore} from "../../store"
import { useRef } from "react"
import clsx from "clsx"

const Control = () => {
    const [state, dispatch] = useStore()
    const inputRef = useRef()
    const handleSetTask = (value) => {
        dispatch(setTask(value))
    }
    const handleAddTask = () => {
        dispatch(addTask())
        dispatch(setTask(''))
        inputRef.current.focus()
    }
 
    return (<div className={clsx(styles.control)}>
        <input 
            placeholder="Enter your task ...."
            onChange={e => handleSetTask(e.target.value)}
            value={state.task}
            ref={inputRef}
        />
        <button
            onClick={handleAddTask}
        >Add it!</button>
    </div>)
}

export default Control