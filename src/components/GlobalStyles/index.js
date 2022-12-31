import styles from "./GlobalStyles.module.css"
import clsx from "clsx"

const GlobalStyles = ({children}) => {
    return (<div className={clsx(styles.wrapper, styles.global)}>{children}</div>)
}

export default GlobalStyles