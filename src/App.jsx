import { useState } from 'react'
import Helmet from './components/Header'
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    return (
        <div>
            <Header
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                isValidPresupuesto = {isValidPresupuesto}
                setIsValidPresupuesto = {setIsValidPresupuesto}
            />
        </div>
    )
}

export default App
