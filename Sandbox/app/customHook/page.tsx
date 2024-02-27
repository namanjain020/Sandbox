'use client'
import { useState } from "react";

export default function App(){
    const [name,setName] =useState('')

    return (<input className="bg-black text-white " type="text" value={name} onChange={e =>setName(e.target.value)}></input>)
} 