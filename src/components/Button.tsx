import React, { MouseEventHandler } from "react"
import "./Button.css"

const Button = ({ className, value, onClick }: {className: string, value: string | number, onClick: MouseEventHandler})  => {
    return(
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button