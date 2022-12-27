import styles from "./Head.module.css"
import clsx from "clsx"

const Header = () => {

    return (
        <h1 className={clsx(styles.heading)} >
            Todo List ...
        </h1>
    )

}

export default Header