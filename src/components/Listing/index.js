import {useStore, deleteTask} from "../../store"

const List = () => {

    const [state, dispatch] = useStore()
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }
    
    return (
        <div className="render">
            <ul>
            { state.tasks.map(task => <li key={task.id}>{task.task} <b onClick={() => handleDeleteTask(task.id)}>x</b></li>) }
            </ul>
        </div>
    )

}

export default List