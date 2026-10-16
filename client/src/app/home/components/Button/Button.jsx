'use client';
import Link from "next/link";
import { useState } from "react"

export const CreateButton = () => {
    return (
        <button onClick={handleText}>{text ? "on" : "off"}</button>
    )
}