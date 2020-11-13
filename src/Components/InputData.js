import React, { useState, useContext } from 'react'

import { DataContext } from '../Context/DataContext'
import '../App.css'

const InputData = (props) => {

  const [errors, setErrors] = useState("")

  const context = useContext(DataContext)

  const handleChange = (e) => {
    if (e.target.name === "data1") {
      context.setData1(e.target.value)
    } if (e.target.name === "data2") {
      context.setData2(e.target.value)
    } if (e.target.name === "data3") {
      context.setData3(e.target.value)
    }
  }

  const findIndex = () => {
    if (props.index !== context.indexInput) {
      context.setData1("")
      context.setData2("")
      context.setData3("")
    }
    context.indexInput !== props.index && context.setIndexInput(props.index)
  }

  const validData = () => {
    if (props.index === context.indexInput) {
      if (context.result.length >= props.index) {
        if (context.result[context.indexInput]) {
          context.setResult(context.result.map(datas => context.result[context.indexInput] === datas ? { ...datas, data3: context.data3, data2: context.data2, data1: context.data1 } : datas))
        } else {
          context.setResult([...context.result, { "data3": context.data3, "data2": context.data2, "data1": context.data1 }])
          setErrors("")
        }
      }
      else {
        setErrors("le champs précédent n'est pas renseigné")
      }
    }
    context.setData1("")
    context.setData2("")
    context.setData3("")
  }

  const modifData = async () => {
    context.setIndexInput(props.index)
    if (context.result[context.indexInput]) {
      context.setData1(context.result[props.index].data1)
      context.setData2(context.result[props.index].data2)
      context.setData3(context.result[props.index].data3)
    }
  }


  return (
    <div className="contain">
      <p>poteau numéro {props.index + 1}: </p>
      <div className="separator">

        <div className="inputs">
          <div className="inputSolo">
            <label htmlFor={"chamber" + props.index}>numéro de chambre: </label>
            <input id={"chamber" + props.index} name="data1" type="text" placeholder="" value={context.indexInput === props.index ? context.data1 : ""} onChange={handleChange} onClick={() => findIndex()} />
          </div>
          <div className="inputSolo">
            <label htmlFor={"insee" + props.index}>code INSEE: </label>
            <input id={"insee" + props.index} name="data2" type="text" placeholder="" value={context.indexInput === props.index ? context.data2 : ""} onChange={handleChange} onClick={() => findIndex()} />
          </div>
          <div className="inputSolo">
            <label htmlFor={"poteau" + props.index}>numéro poteau: </label>
            <input id={"poteau" + props.index} name="data3" type="text" placeholder="" value={context.indexInput === props.index ? context.data3 : ""} onChange={handleChange} onClick={() => findIndex()} />
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => validData()}>valider</button>
          <button onClick={() => modifData()}>modifier</button>
        </div>
        {errors !== "" && <div className="error" >{errors}</div>}
      </div>
      <div className="saveResults">
        {context.result[props.index] &&
          <div className="results">
            <p>données sauvegardées: </p>
            <p>numéro de chambre: {context.result[props.index].data1}  </p>
            <p>code INSEE: {context.result[props.index].data2}  </p>
            <p>numéro poteau: {context.result[props.index].data3}</p>
          </div>
        }
      </div>


    </div>
  )
}

export default InputData
