import React from "react"
import "./ButtonBox.css"

const ButtonBox = ({ children }: { children: any }) => {
    return <div className="buttonBox">{children}</div>
}

export default ButtonBox