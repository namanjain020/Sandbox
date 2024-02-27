'use client'
import { useState,useEffect } from "react";
export default function App() {
    
    const [resourceType, setResourceType] = useState('Posts');
    const [items,setItems] = useState([]);
  
    console.log('render');
    useEffect(() =>{
          fetch(`https://jsonplaceholder.typicode.com/todos/1/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    },[resourceType]);
    return (<>
        <div className="flex p-2">
            <button className="p-2 m-4 bg-slate-300 rounded-md" onClick={() => setResourceType('Posts')}>Posts</button>
            <button className="p-2 m-4 bg-slate-300 rounded-md" onClick={() => setResourceType('Users')}>Users</button>
            <button className="p-2 m-4 bg-slate-300 rounded-md" onClick={() => setResourceType('Comments')}>Comments</button>
        </div>
        <h1 className="p-2">{resourceType}

        </h1>
        <div className="p-3">
        {items.map(item =>{
            return <p className="flex flex-col text-md m-2">{JSON.stringify(item)}</p>
        })}
        
        </div>
        </>)
}