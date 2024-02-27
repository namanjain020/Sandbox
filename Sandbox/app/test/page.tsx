'use client'
import { useState } from "react"
import About from "./About";
// import sum from "./sum";
export default function Page() {
  const [value, setValue] = useState(0);
  const a=5;
  const b= 7;
  return (
    <div>
      <h1>{a}+{b}</h1>
      <h2>{value}</h2>
      <button className="bg-blue-300" onClick={()=> import("./sum").then(mod => setValue(mod.default(a,b)))}>Add button</button>
      <About/>
    </div>
  )
}