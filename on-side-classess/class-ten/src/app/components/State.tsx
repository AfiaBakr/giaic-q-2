
"use client"
import { useState } from "react";


export default function State (){
    const [count, setCount] =useState(0) //javascript
    //const fullName="Ali Jawwad"
    return(
        <div>
          <p>My name is:{count}</p>
          <button onClick={()=> setCount(count +1)} className="bg-black text-white py-1 px-2">Incriment</button><br/><br/>
          <button onClick={()=> setCount(count -1)} className="bg-black text-white py-1 px-2">Decriment</button><br/><br/>
          <button onClick={()=> setCount(0)} className="bg-black text-white py-1 px-2">Re Set</button> 
        </div>
    )
}
// 0 is default value of useState variable which name is count.