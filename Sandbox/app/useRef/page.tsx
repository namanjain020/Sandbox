'use client'
import { useState, useRef, useEffect, Suspense } from "react"

export default function Page() {
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect(()=>{
        renderCount.current=renderCount.current+1;
    })

    return (<><input value={name} onChange={e => setName(e.target.value)}></input>
        <div>MyName is {name}</div>
        <div>Rendered {renderCount.current} times</div>
        <Suspense></Suspense>
        </>)
}