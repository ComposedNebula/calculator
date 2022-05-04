import React from "react"
import { Textfit } from "react-textfit"
import "./Screen.css"

const Screen = ({ value }: { value: any}) => {
    return(
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    )
}

export default Screen