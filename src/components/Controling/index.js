import {addTask, setTask, useStore} from '../../store'
import { useRef } from 'react'
import styles from "./Control.module.css"
import clsx from 'clsx'

const Control = () => {
    const taskRef = useRef()
    const [ state, dispatch ] = useStore()
    const handleSetTask = (value) => {
      dispatch(setTask(value))
    }
    const handleAddTask = () => {
      dispatch(addTask())
      dispatch(setTask(''))
      taskRef.current.focus()
    }
    return (
        <div className="control">
            <input 
                ref={taskRef}
                placeholder="Enter Task Name ...."
                value={state.task}
                onChange={e => handleSetTask(e.target.value)}
            />
            <button
                className={clsx(styles.btn, {
                    'active': true
                })}
                // GlobalStyles + clsx + module css
                onClick={handleAddTask}
            >
                Add 
            </button>
      </div>
    )

}

export default Control