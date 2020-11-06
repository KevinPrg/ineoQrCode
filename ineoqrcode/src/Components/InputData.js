import React, { useContext } from 'react'

import { DataContext } from '../Context/DataContext'

const InputData = (props) => {

  const context = useContext(DataContext)

  const handleChange = (e) => {
    if (e.target.name === "data1") {
      context.setData1(e.target.value)
      console.log(context.data1)
    } if (e.target.name === "data2") {
      context.setData2(e.target.value)
      console.log(context.data2)
    } if (e.target.name === "data3") {
      context.setData3(e.target.value)
      console.log(context.data3)
    }
  }

  const validData = () => {

    context.result[context.testIndex] ? context.setResult(context.result.map(datas => context.testIndex === props.index && { ...datas, "data3": context.data3, "data2": context.data2, "data1": context.data1 })) : context.setResult([...context.result, { "data3": context.data3, "data2": context.data2, "data1": context.data1 }])
    context.setData1('0')
    context.setData2('0')
    context.setData3('0')
  }

  const findIndex = () => {
    context.setTestIndex(props.index)
    if (context.testIndex === props.index) {
      if (context.result[context.testIndex]) {
        context.setData1(context.result[context.testIndex].data1)
        context.setData2(context.result[context.testIndex].data2)
        context.setData3(context.result[context.testIndex].data3)
      } else {
        context.setData1("0")
        context.setData2("0")
        context.setData3("0")
      }
    }
  }

  return (
    <div>
      <input name="data1" type="text" placeholder="0" value={context.testIndex === props.index ? context.data1 : "0"} onChange={handleChange} onClick={() => findIndex()} />
      <input name="data2" type="text" placeholder="0" value={context.testIndex === props.index ? context.data2 : "0"} onChange={handleChange} onClick={() => findIndex()} />
      <input name="data3" type="text" placeholder="0" value={context.testIndex === props.index ? context.data3 : "0"} onChange={handleChange} onClick={() => findIndex()} />

      <button onClick={() => validData()}>validate</button>
    </div>
  )
}

export default InputData
