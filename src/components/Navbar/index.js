import { Link } from "react-router-dom"
import clsx from "clsx"
import styles from "./Navbar.module.css"

const Navbar = () => {
    
    return (
        <ul className={clsx(styles.navbar)}>
            <li>Just Todo List ...</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )

}

export default Navbar