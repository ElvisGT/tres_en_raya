import { useState } from "react"
import "../assets/styles/button.css"

export const ButtonItem = () => {
    const [fig,setFig] = useState('X');
    return (
        <button className="buttonFig">
            {fig}
        </button>

    )
}


