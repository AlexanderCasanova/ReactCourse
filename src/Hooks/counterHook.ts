import { useState } from "react"


export const counterHookFuntion = (initValue:number =0)=>{
    const [counter, setCounter] = useState<number>(initValue)

    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }
    const reset = ()=>{
        setCounter(0)
    }

    return{
        counter,increment,decrement,reset
    }
}