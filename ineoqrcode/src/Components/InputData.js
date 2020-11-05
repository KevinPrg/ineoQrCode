import React, { useState, useContext } from 'react'

import { DataContext } from '../Context/DataContext'

const InputData = () => {

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

  const resetData = () => {
    context.setData1(null)
    context.setData2(null)
    context.setData3(null)
  }

  return (
    <div>
      <input name="data1" type="text" value={context.data1} onChange={handleChange} />
      <input name="data2" type="text" value={context.data2} onChange={handleChange} />
      <input name="data3" type="text" value={context.data3} onChange={handleChange} />

      <button onClick={() => resetData()}>reset datas</button>
    </div>
  )
}

export default InputData
