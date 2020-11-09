import React, { useState, useContext } from 'react';
import QRCode from 'qrcode.react';

import InputData from './InputData'

import { DataContext } from '../Context/DataContext'

const QrCode = () => {

  const context = useContext(DataContext)

  const [showInputs, setShowInputs] = useState(false)
  const [show, setShow] = useState(false)
  const [numberInput, setNumberInput] = useState(0)
  const [mapGenerateInput, setMapGenerateInput] = useState(null)
  const [qrValue, setQrValue] = useState("")
  let generateInputs = []

  const result = () => {
    setShow(!show)
    const finalResult = []
    let increment = 1
    for (let i = 0; i < context.result.length; i++) {
      finalResult.push(` [Données ${increment}: \n Numéro de chambre: ${context.result[i].data1} \n Code INSEE: ${context.result[i].data2} \n Numéro de poteau: ${context.result[i].data3}] \n\n`)
      increment += 1
    }
    setQrValue(finalResult.join(''))
  }

  const handleChange = (e) => {
    setNumberInput(e.target.value)
  }

  const tables = async () => {
    generateInputs = []
    for (let i = 0; i < numberInput; i++) {
      generateInputs.push(<InputData index={i} />)
    }
    setShowInputs(!showInputs)
    setMapGenerateInput(generateInputs)
  }

  return (
    <div>

      nombre de champs: <input value={numberInput} onChange={handleChange} /> <button onClick={() => tables()} >valider</button>

      {showInputs === true && <div>{mapGenerateInput.map((layoutInput, index) => { return (<div key={index}>{layoutInput}</div>) })}</div>}

      <button onClick={() => result()} >générer</button>
      {show === true &&
        <QRCode value={qrValue} size={200} />
      }
    </div>
  )
}

export default QrCode
