import { useState } from "react"
import "../assets/styles/button.css"

export const ButtonItem = () => {
    const [buttonClass,setButtonClass] = useState('buttonFig-text');
    
    const handleButton = () => {
        setButtonClass('buttonFig-text-active')
    }
    
    return (
        <button className="buttonFig" onClick={handleButton}>
            <span className={buttonClass}>X</span>
            <span className={buttonClass}>O</span>
        </button>

    )
}


