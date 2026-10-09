'use client';

import { useState } from "react"

export const CreateButton = () => {
    const [text, setText] = useState(false)

    const handleText = () => {
        setText(prev => !prev)
    }
 
    return (
        <button onClick={handleText}>{text ? "on" : "off"}</button>
    )
}