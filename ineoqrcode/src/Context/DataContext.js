import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export default ({ children }) => {
  const [data1, setData1] = useState('')
  const [data2, setData2] = useState('')
  const [data3, setData3] = useState('')
  const [testIndex, setTestIndex] = useState('')
  const [result, setResult] = useState([])

  return (
    <div>
      <DataContext.Provider value={{
        data1,
        setData1,
        data2,
        setData2,
        data3,
        setData3,
        testIndex,
        setTestIndex,
        result,
        setResult
      }}>
        {children}
      </DataContext.Provider>

    </div>
  )
}