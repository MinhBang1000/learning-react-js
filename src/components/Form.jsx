const Form = (props) => {

    return (
        <form >
            <input 
                type="text" 
                onChange={props.onHandleInput} 
                placeholder="Task name ..." 
                value={props.inputValue}
                defaultValue=""
                ref={props.inputRef}
            />
            <button type="submit" onClick={props.onHandleClick} >Add</button>
        </form>
    )

}

export default Form
