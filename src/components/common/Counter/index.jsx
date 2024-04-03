"use client";

import { useState } from "react"

export default function Counter(){
    const [num, setNum] = useState(0)

    const handleClick = () => {
        setNum(num+1)
    }
    
    return(
        <div>
            <p>{num}</p>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}