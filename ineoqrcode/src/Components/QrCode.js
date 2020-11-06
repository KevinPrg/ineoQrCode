import React, { useState, useContext } from 'react';
import QRCode from 'qrcode.react';

import InputData from './InputData'

import { DataContext } from '../Context/DataContext'

const QrCode = () => {

  const [showInputs, setShowInputs] = useState(false)
  const [show, setShow] = useState(false)
  const [concat, setConcat] = useState(null)
  const [numberInput, setNumberInput] = useState(0)
  let tests = []
  const [valor, setValor] = useState(null)

  const context = useContext(DataContext)


  const result = () => {
    setShow(!show)
    setConcat(context.data1 + context.data2 + context.data3)
    console.log(concat)
  }

  const handleChange = (e) => {
    setNumberInput(e.target.value)
  }

  const tables = async () => {
    tests = []
    for (let i = 0; i < numberInput; i++) {
      tests.push(<InputData index={i} />)
    }
    setShowInputs(!showInputs)
    setValor(tests)
  }

  return (
    <div>

      nombre de champs: <input value={numberInput} onChange={handleChange} /> <button onClick={() => tables()} >valider</button>

      {showInputs === true && <div>{valor.map((bloc, index) => { return (<div key={index}>{bloc}</div>) })}</div>}

      <button onClick={() => result()} >générer</button>
      {show === true &&
        <QRCode value={concat} />
      }
    </div>
  )
}

export default QrCode
