import styles from "./Card.module.css"
import clsx from "clsx"

const Card = ({children}) => {
    return ( <div className={clsx(styles.card)}>{children}</div> )
}

export default Card 