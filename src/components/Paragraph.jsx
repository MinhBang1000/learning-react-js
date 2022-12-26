import { useContext } from "react"
import { ThemeContext } from "../storing/ThemeContext"
import "./Paragraph.css"

const Paragraph = () => {
    const theme = useContext(ThemeContext)

    return (
        <p className={theme.theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum illum placeat vel. 
            Quae possimus neque itaque harum hic? Vitae sed, eligendi ullam quae nam ad quas tempore ex consequuntur.
        </p>
    )
}

export default Paragraph
