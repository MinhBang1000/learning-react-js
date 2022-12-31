import styles from "./Header.module.css"
import clsx from "clsx"
const Header = () => {
    return (<h1 className={clsx(styles.header)}>Todo List ...</h1>)
}

export default Header