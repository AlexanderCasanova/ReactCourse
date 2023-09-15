
import { counterHookFuntion } from "../Hooks/counterHook"

export const CounterComponent=()=>{

    const {counter,increment,decrement,reset}=counterHookFuntion(0)

    return(
        <>
            <p>{counter}</p>
            <button onClick={()=>{ increment() } }>Up</button>
            <button onClick={()=>{ decrement() } }>Down</button>
            <button onClick={()=>{ reset() } }>Reset</button>
        </>
    )
}