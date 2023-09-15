import { CounterComponent } from "./components/CounterComponent"


export const CounterApp = () => {

    return (
        <>
            <div className="container">
                <h1>Counter Application</h1>
                <hr />
                <CounterComponent />
            </div>
        </>
    )
}