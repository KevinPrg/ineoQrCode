import React, { useState, useContext } from 'react';
import QRCode from 'qrcode.react';

import InputData from './InputData'
import '../App.css'

import { DataContext } from '../Context/DataContext'

const QrCode = () => {

  const context = useContext(DataContext)

  const [buttonGenerate, setButtonGenerate] = useState(false)
  const [show, setShow] = useState(false)
  const [numberInput, setNumberInput] = useState("")
  const [mapGenerateInput, setMapGenerateInput] = useState([])
  const [qrValue, setQrValue] = useState("")
  let generateInputs = []

  const handleChange = (e) => {
    setNumberInput(e.target.value)
  }

  const tables = async () => {
    generateInputs = []
    for (let i = 0; i < numberInput; i++) {
      generateInputs.push(<InputData index={i} />)
    }
    setMapGenerateInput(generateInputs)
    setButtonGenerate(true)
  }

  const result = () => {
    setShow(!show)
    const finalResult = []
    let increment = 1
    for (let i = 0; i < context.result.length; i++) {
      finalResult.push(` [Codes ${increment}: \n chambre: ${context.result[i].data1} \n INSEE: ${context.result[i].data2} \n poteau: ${context.result[i].data3}] \n\n`)
      increment += 1
    }
    setQrValue(finalResult.join(''))
  }

  const downloadQR = () => {
    const canvas = document.getElementById("qrCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div className="numberInputs">
        nombre de champs: <input value={numberInput} onChange={handleChange} /> <button onClick={() => tables()} >valider</button>
      </div>

      <div>{mapGenerateInput.map((layoutInput, index) => { return (<div key={index}>{layoutInput}</div>) })}</div>
      <div className="generateCode">
        {show &&
          <div className="code">
            <QRCode id="qrCode" value={qrValue} size={500} level='M' />
            <button className="download" onClick={downloadQR}> Telecharger ce QR code </button>
          </div>
        }
        {buttonGenerate && <button onClick={() => result()} >générer le QR Code</button>}

      </div>
    </div>
  )
}

export default QrCode
