import React, { useContext } from 'react'

import { DataContext } from '../Context/DataContext'

const InputData = (props) => {

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

  const validData = () => {
    if (props.index === context.indexInput) {
      if (context.result[context.indexInput]) {
        context.setResult(context.result.map(datas => context.result[context.indexInput] === datas ? { ...datas, data3: context.data3, data2: context.data2, data1: context.data1 } : datas))
      } else {
        context.setResult([...context.result, { "data3": context.data3, "data2": context.data2, "data1": context.data1 }])
      }
      context.setData1("")
      context.setData2("")
      context.setData3("")
    }
  }

  const findIndex = () => {
    context.indexInput !== props.index && context.setIndexInput(props.index)
  }

  const modifData = () => {
    if (context.indexInput === props.index) {
      if (context.result[context.indexInput]) {
        context.setData1(context.result[context.indexInput].data1)
        context.setData2(context.result[context.indexInput].data2)
        context.setData3(context.result[context.indexInput].data3)
      } else {
        context.setData1("")
        context.setData2("")
        context.setData3("")
      }
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="chamber">numéro de chambre</label>
        <input id="chamber" name="data1" type="text" placeholder="" value={context.indexInput === props.index ? context.data1 : ""} onChange={handleChange} onClick={() => findIndex()} />
      </div>
      <div>
        <label htmlFor="insee">code INSEE</label>
        <input id="insee" name="data2" type="text" placeholder="" value={context.indexInput === props.index ? context.data2 : ""} onChange={handleChange} onClick={() => findIndex()} />
      </div>
      <div>
        <label htmlFor="poteau">numéro poteau</label>
        <input id="poteau" name="data3" type="text" placeholder="" value={context.indexInput === props.index ? context.data3 : ""} onChange={handleChange} onClick={() => findIndex()} />
      </div>

      <button onClick={() => validData()}>validate</button>
      <button onClick={() => modifData()}>modifier</button>

      {context.result[props.index] &&
        <div>
          <p>données sauvegardées: numéro de chambre: {context.result[props.index].data1},</p>
          <p>code INSEE: {context.result[props.index].data2},</p>
          <p>numéro poteau: {context.result[props.index].data3}</p>
        </div>}

    </div>
  )
}

export default InputData
