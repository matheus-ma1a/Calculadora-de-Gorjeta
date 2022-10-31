import { useState } from 'react'
import './App.css'

function App() {
  const [conta, setConta] = useState(0)
  const [gorjeta, setGorjeta] = useState(10)

  const resGorjeta = conta * ( gorjeta /100)
  const total = Number(resGorjeta) + Number(conta)

  const handleGorjeta = (e)=> {

    setGorjeta(e.target.value)
  }

  const handleConta = (e)=> {

    setConta(e.target.value)
  }

  return (
    <div className="App">
      <h1>Contador de gorjeta</h1>
      <p>quanto deu a conta?</p>

      <input value={conta} onChange={handleConta} type="number"/>

      <p>qual a porcentagem da gorjeta?</p>

      <input value={gorjeta} onChange={handleGorjeta} type="number"/>

      <div className="separator"></div>
   
      <h2 className='subTotal' > Sub-total <mark>{conta}</mark></h2>
      <h2> Gorjeta ({gorjeta}%) <mark>{resGorjeta.toFixed(2)}</mark></h2>
      <h2> Total <mark>{total.toFixed(2)}</mark></h2>

    </div>
  )
}

export default App