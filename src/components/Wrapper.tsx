import React from "react"
import "./Wrapper.css"

const Wrapper = ({ children }: { children: any}) => {
    return <div className="wrapper">{children}</div>
}

export default Wrapper