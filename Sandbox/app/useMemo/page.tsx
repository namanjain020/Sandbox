'use client'
import { useState, useMemo, useEffect } from "react"
export default function App() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // console.time('filter array');
    const doubleNumber = slowFunction(number);
    // const doubleNumber = useMemo(() => slowFunction(number), [number])
    // console.timeEnd('filter array');
    //useMemo tc and time calc


    // const themeStyles = {
    //     backgroundColor: dark ? 'grey' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'grey' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]); // now the themeStyles on changes when dark variable is changed

    useEffect(() => {
        console.log("Theme changed")
    }, [themeStyles])

    return (
        <>
            <div className="p-5 m-4 flex">
                <input className="outline outline-1 p-3 m-1" type="number" value={number} onChange={e => setNumber(parseInt
                    (e.target.value))} />
                <button className=" bg-slate-300 p-3 rounded-lg  m-1 " onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
                <div className="ml-4 p-2 bg-slate-300 w-10" style={themeStyles}>{doubleNumber}</div>
            </div>

        </>)
}
function slowFunction(num: number) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}