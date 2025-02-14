'use client';

import { FormEvent, useRef, useState } from "react";

const Authen =() =>{
    const email =useRef <HTMLInputElement>(null)
    //const [input_value, setinput_value] = useState('')
    
    const handle_req = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const emailBody = email?.current?.value //keep the treack of value
        console.log('value',emailBody)
        let res = await fetch('/api/Auth',{
          cache: 'no-store',
          method: 'POST',
          headers: {'Content=Type' : 'application/json'}, 
          body :JSON.stringify({email: emailBody}) 
        }, 
    )
    }
    return(
        <div>
            <form onSubmit={handle_req}>
            <input
            ref={email}
             placeholder="Email" type="email"/>
            <button >Submit</button>
            </form>
        </div>
    )
}
export default Authen;